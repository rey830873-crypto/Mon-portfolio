// Rendu dynamique + animations + galerie Lightbox

document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.getElementById("skills-horizontal");
  if (skillsContainer && typeof PORTFOLIO_SKILLS !== "undefined") {
    skillsContainer.innerHTML = PORTFOLIO_SKILLS.map(
      (s, i) => `
      <div
        class="reveal rounded-3xl p-6 border-2 ${s.borderClass} ${s.bgClass} transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
        style="transition-delay: ${i * 90}ms"
      >
        <div>
          <span class="font-syne text-4xl font-extrabold ${s.numClass}">${s.num}</span>
          <h3 class="font-grotesk text-xl font-bold uppercase text-slate-900 mt-3">${s.title}</h3>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">${s.subtitle}</p>
        </div>
        <p class="text-sm text-slate-600 leading-relaxed mt-4">${s.desc}</p>
      </div>
    `
    ).join("");
  }

  // 2. Render Sticky Stacking Projects
  const projectsContainer = document.getElementById("projects-stack");
  if (projectsContainer && typeof PROJECTS_DATA !== "undefined") {
    projectsContainer.innerHTML = Object.entries(PROJECTS_DATA)
      .map(([key, p]) => {
        const isMulti = p.images.length > 1;
        const btnLabel = isMulti ? `Voir les ${p.images.length} captures →` : "Agrandir →";
        const gridCols =
          p.images.length >= 4
            ? "grid-cols-2 sm:grid-cols-4 gap-3"
            : p.images.length === 2
            ? "sm:grid-cols-2 gap-4"
            : "grid-cols-1";

        const imgsHtml = p.images
          .map(
            (img, idx) => `
            <div class="bg-[#0b0b0f] rounded-2xl p-2 ${p.images.length >= 4 ? "h-48" : "h-56"} flex items-center justify-center overflow-hidden">
              <img src="${encodeURI(img)}" alt="${p.title} ${idx + 1}" class="max-h-full max-w-full object-contain rounded-lg transition duration-300 hover:scale-105" />
            </div>
          `
          )
          .join("");

        return `
          <article class="stack-card ${p.cardBg} border-2 ${p.border} rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div class="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div class="flex items-center gap-4">
                <span class="font-syne text-3xl sm:text-4xl font-extrabold ${p.numColor}">${p.num}</span>
                <div>
                  <h3 class="font-grotesk text-xl sm:text-2xl font-bold uppercase">${p.title}</h3>
                  <p class="text-xs ${p.tagColor} font-semibold uppercase tracking-wider">${p.category}</p>
                </div>
              </div>
              <button type="button" data-open-project="${key}" class="px-5 py-2.5 rounded-full ${p.btnColor} text-xs font-bold uppercase tracking-wider transition hover:scale-105">
                ${btnLabel}
              </button>
            </div>
            <p class="text-slate-300 text-sm mt-4 mb-5">${p.description}</p>
            <div class="grid ${gridCols}">${imgsHtml}</div>
          </article>
        `;
      })
      .join("");
  }

  // 3. Mobile Menu
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
    );
  }

  // 4. Scroll Reveal Animation
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // 5. Project Lightbox Modal
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalCat = document.getElementById("modal-cat");
  const modalDesc = document.getElementById("modal-desc");
  const modalStack = document.getElementById("modal-stack");
  const modalCounter = document.getElementById("modal-counter");
  const modalThumbs = document.getElementById("modal-thumbs");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");
  const closeBtn = document.getElementById("modal-close");

  let currentProject = null;
  let currentIdx = 0;

  function renderModalImage(idx) {
    if (!currentProject) return;
    const total = currentProject.images.length;
    currentIdx = ((idx % total) + total) % total;
    modalImg.src = encodeURI(currentProject.images[currentIdx]);
    modalCounter.textContent = `${currentIdx + 1} / ${total}`;

    const multi = total > 1;
    prevBtn.classList.toggle("hidden", !multi);
    nextBtn.classList.toggle("hidden", !multi);

    modalThumbs.innerHTML = multi
      ? currentProject.images
          .map(
            (src, i) => `
          <button type="button" data-idx="${i}" class="w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
              i === currentIdx ? "border-pink-500 scale-105" : "border-slate-200 opacity-60 hover:opacity-100"
            }">
            <img src="${encodeURI(src)}" alt="" class="w-full h-full object-cover" />
          </button>
        `
          )
          .join("")
      : "";

    modalThumbs.querySelectorAll("button").forEach((b) =>
      b.addEventListener("click", () => renderModalImage(Number(b.dataset.idx)))
    );
  }

  if (modal) {
    document.querySelectorAll("[data-open-project]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const proj = PROJECTS_DATA[trigger.dataset.openProject];
        if (!proj) return;
        currentProject = proj;
        modalTitle.textContent = proj.title;
        modalCat.textContent = proj.category;
        modalDesc.textContent = proj.description;
        modalStack.innerHTML = proj.stack
          .map((s) => `<span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">${s}</span>`)
          .join("");
        renderModalImage(0);
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (prevBtn) prevBtn.addEventListener("click", () => renderModalImage(currentIdx - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => renderModalImage(currentIdx + 1));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
    });
  }

  // 6. Contact Form Feedback
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("sujet").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "Veuillez remplir tous les champs obligatoires.";
        formStatus.className = "mt-4 p-3 rounded-xl text-sm font-medium bg-pink-50 text-pink-700 border border-pink-200";
        return;
      }

      const mailtoSub = encodeURIComponent(subject || `Message Portfolio — ${name}`);
      const mailtoBody = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
      formStatus.innerHTML = `Merci <strong>${name}</strong> ! Votre message est prêt. <a href="mailto:edereherve@gmail.com?subject=${mailtoSub}&body=${mailtoBody}" class="underline text-sky-700 font-semibold">Cliquez ici si votre messagerie ne s'ouvre pas</a>.`;
      formStatus.className = "mt-4 p-3 rounded-xl text-sm font-medium bg-emerald-50 text-emerald-800 border border-emerald-200";
      window.location.href = `mailto:edereherve@gmail.com?subject=${mailtoSub}&body=${mailtoBody}`;
      contactForm.reset();
    });
  }
});
