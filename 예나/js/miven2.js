function change_btn(e) {
    var btns = document.querySelectorAll(".button");
    btns.forEach(function (btn, i) {
      if (e.currentTarget == btn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    console.log(e.currentTarget);
  }

  const buttons = document.querySelectorAll('.button');

  buttons.forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      // 현재 호버된 버튼을 제외한 모든 버튼의 색상 변경
      buttons.forEach(function(otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.classList.add('change-color');
        }
      });
    });

    btn.addEventListener('mouseleave', function() {
      // 마우스가 벗어나면 모든 버튼의 색상을 원래대로 돌림
      buttons.forEach(function(otherBtn) {
        otherBtn.classList.remove('change-color');
      });
    });
  });
