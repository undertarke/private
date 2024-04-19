

let data = [{
  img: "https://p9-sign-sg.tiktokcdn.com/tos-alisg-p-0037/732bbf0c752e4d85909a110bb07a5f2b_1713106621~tplv-tiktok-logom-rs:tos-alisg-i-0068/oQAiJ7ABibA4ZCAEupvAruBAwYEIvhH7Ikarg:480:480.avif?x-expires=1713448800&x-signature=hErLbdLlvt6sxuaCpu3%2F1FxJ2DU%3D",
  title: "Code My Baby I love you",
  link:"https://drive.google.com/file/d/12mb_Ukvu55CWU3_nUdE2aUwAOYguOXJ0/view?usp=sharing"
},
{
  img: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/41ad6bceddde4a18a123ddaa28a4cd14_1699890189~tplv-tiktok-logom-rs:tos-alisg-pv-0037/oEGVghAeIIIJUeADIiKEkGBEpQGnohAeAAsLCr:480:480.avif?x-expires=1713448800&x-signature=3EeZ%2Ffgi3EMY4jovNYjqKaoWB5E%3D",
  title: "20/11/24",
  link:"https://drive.google.com/drive/folders/1UoPHg0HwHlNY6qxiG8TMOQsrtqR6-5bv?usp=drive_link"
},
{
  img: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/oAhtsK5IfCzwfAjs5ZAAIXQDr8M46iNe88ANKo~tplv-tiktok-logom-rs:tos-alisg-i-0068/oQhZQDRyIAUWfmAE7BnEb84AZEBRgAFRlFCAEf:480:480.avif?x-expires=1713524400&x-signature=udQWELfy9Y%2Fz0CBED4SmKI7y70Q%3D",
  title: "Nodel 2024",
  link:"https://drive.google.com/file/d/1SjGqm7gKszcQF-hW8WH6vD6fiQK56bop/view?usp=sharing"
},{
  img: "https://threejs.org/examples/screenshots/css3d_periodictable.jpg",
  title: "Bảng tuần hoàn",
  link:"https://drive.google.com/file/d/1m_vtzGyJQUT24B0ICW1JcAY98dRjS0ne/view?usp=drive_link"
},{
  img: "https://html-plus.in.ua/wp-content/uploads/2019/12/happy-new-year-codepen.png",
  title: "Happy new year 2023",
  link:"https://drive.google.com/file/d/1UJdCk6y0Gz-HX8sbB_CuCrVhaxYp0JLF/view?usp=drive_link"
}
,
{
  img: "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-p-0037-aiso/owRDFekuBDVWhHCCfQA8yEIzhQaPIIqB9CNv4A~tplv-photomode-zoomcover:480:480.avif?x-expires=1713531600&x-signature=IQGhzJL5wQssraJrU6oqlnfTBjU%3D",
  title: "Xe Bus",
  link:"https://drive.google.com/file/d/1wmspGeIVsSiR4hkxZSP5c2RWodQQqisS/view?usp=drive_link"
}
]

const oclick = ()=>{
  // window.location.href="https://dolatiaschan.com/4/7359951"
  window.open('https://dolatiaschan.com/4/7359951', '_blank');
}

window.onload = () => {

  data.map(item => {

    document.querySelector(".custom-carousel").innerHTML += `
      <div class="item "
      style="background-image: url(${item.img});">

      <div class="item-desc">
      <a href="${item.link}" target="_blank" =>
          <h3>${item.title}</h3>
        </a>
      </div>
  </div>
      
      `
  })

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
}

