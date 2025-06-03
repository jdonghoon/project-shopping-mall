document.addEventListener("DOMContentLoaded", () => {
  // ✅ 1. 공통 header 로딩
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;

      // header 안에 있는 버튼들 (header 로딩 이후에 등록해야 함)
      const menuOpenBtn = document.getElementById("menu-open");
      const menuCloseBtn = document.getElementById("menu-close");
      const overlayMenu = document.getElementById("overlay-menu");

      const loginBtn = document.getElementById("login-btn");
      const likeButtons = document.querySelectorAll(".like-button");
      const searchBtn = document.querySelector(".fa-magnifying-glass");

      // 메뉴 열기
      menuOpenBtn?.addEventListener("click", () => {
        overlayMenu.style.display = "flex";
      });

      // 메뉴 닫기
      menuCloseBtn?.addEventListener("click", () => {
        overlayMenu.style.display = "none";
      });

      // 메뉴 외부 클릭 시 닫기
      window.addEventListener("click", (e) => {
        if (e.target === overlayMenu) overlayMenu.style.display = "none";
      });

      // 로그인 버튼 → 로그인 모달 열기
      loginBtn?.addEventListener("click", () => {
        document.getElementById("login-modal").style.display = "flex";
      });

      // 좋아요 버튼 → 로그인 유도
      likeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          document.getElementById("login-modal").style.display = "flex";
        });
      });

      // 검색 아이콘 → 검색창 오버레이 열기
      searchBtn?.addEventListener("click", () => {
        document.getElementById("search-overlay").classList.add("active");
        document.getElementById("search-input").focus();
      });
    });

  // ✅ 2. footer 로딩
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

  // ✅ 3. 검색창 닫기
  document.getElementById("search-close")?.addEventListener("click", () => {
    document.getElementById("search-overlay").classList.remove("active");
  });

  // ✅ 4. 로그인/회원가입 모달 관련
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  const goSignup = document.getElementById("go-signup");
  const loginClose = document.getElementById("login-close");
  const signupClose = document.getElementById("signup-close");

  // 로그인 → 회원가입 이동
  goSignup?.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
  });

  // 닫기 버튼
  loginClose?.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  signupClose?.addEventListener("click", () => {
    signupModal.style.display = "none";
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === signupModal) signupModal.style.display = "none";
  });
});
