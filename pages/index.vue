<template>
  <div>
    <!-- 我的简介，我的兴趣 -->
    <section class="section-1 my-career my-interest">
      <div class="wrapper">
        <div class="container">
          <div class="content">
            <h1>
              我是,
              <span id="typed-carrer"></span>
            </h1>
            <p
              style="margin: 0"
            >I am Tom Zhong(大贵), I am Full-Stack Engineer, Basketball fans, and Ukelele fans.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我的个人介绍，技能 -->
    <section class="section-2 self-introduction section-gap">
      <div class="container">
        <div class="row">
          <div class="col-md-4 .col-12">
            <div class="about-img-bg">
              <div class="about-img">
                <img src="/img/me.jpg" alt class="img" />
              </div>
            </div>
          </div>
          <div class="col-md-8 .col-12">
            <div class="introduction">
              <h2 class="mt-10 mb-10">作为一个全栈工程师，不仅仅只学习前后端领域的知识，在其他未知的技术领域也持续探寻。</h2>
              <p
                class="detail"
                style="text-indent: 2em;"
              >人的一生很漫长，我选择了全栈工程师作为我的职业，从React到Node.js, 从Java到Spring Boot，从前端到后端，每一行代码，都是代码大脑思索的结果。</p>
              <div class="coding-panel">
                <span
                  id="typed-npm"
                  style="white-space: pre-wrap;word-wrap: break-word; color:#fff; word-break: break-all"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 前端工程师技能包 -->
    <section class="section-3 section-gap" style="background: #f9f9ff;">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content col-lg-7">
            <div class="title text-center">
              <h1 class="mb-10">全栈工程师技能包</h1>
              <p>都会一点点，但不值一点点</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="code" class="icon"/>
              <a href="#">
                <h4>前端技能</h4>
              </a>
              <p>HTML5, CSS3, Javascript, React.js, Webapck, Vite, 小程序, PWA, Android， 鸿蒙基础开发认证</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="keyboard" class="icon"/>
              <a href="#">
                <h4>后端技能</h4>
              </a>
              <p>Java, SpringBoot, Node.js, Express, Linux, Python, Git, AWS</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="chart-bar" class="icon"/>
              <a href="#">
                <h4>办公技能</h4>
              </a>
              <p>Word, Excel, PowerPoint, VBA</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="gamepad" class="icon"/>
              <a href="#">
                <h4>兴趣爱好</h4>
              </a>
              <p>唱歌, 篮球, 游泳, 尤克里里，吉他, 看书</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="language" class="icon"/>
              <a href="#">
                <h4>语言技能</h4>
              </a>
              <p>粤语，英语，国语</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <font-awesome-icon icon="comments" class="icon"/>
              <a href="#">
                <h4>交往技能</h4>
              </a>
              <p>流畅阅读英文文档，有良好英文听说读写能力，拥有团队意识，较容易融入团队，同时更好地进行工作的协助。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End services Area -->
  </div>
</template>

<script>
import Typed from 'typed.js'
// import { indexPage } from '../seo/index';
export default {
  layout: 'default',
  components: {},
  // ...indexPage,
  mounted() {
    // 使用typed.js
    new Typed('#typed-carrer', {
      strings: ['大贵', '全栈工程师', '篮球爱好者', '尤克里里爱好者'],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: true,
      loop: true
    })
    new Typed('#typed-npm', {
      strings: [
        'npm install Dagui^1000\n`installing...` ^1000\n`[ successful ]Dagui will try best to do everything...`'
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 2000,
      loop: true
    })
  },
}
</script>

<style scoped>
/* section 1 开始 */
.section-1 {
  height: 100vh;
}
.section-1 .wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  padding: 0 15px;
  background: #b8a07e url(/img/home-bg.jpg) repeat scroll center center / cover;
  z-index: -1;
}
.section-1 .container {
  overflow: hidden;
  width: 100%;
}
.section-1 .container .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: #fff;
}
.section-1 .container .content h1 {
  letter-spacing: 0.02em;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: pre-line;
  max-width: 100%;
  color: #fff;
}
.section-1 .container .content p {
  margin: 0;
  color: #fff;
}

/* section 1 结束 */

/* section 2 开始 */
.section-2 {
  background: #fff;
}
.about-img-bg {
  border: 10px solid #b8a07e;
}
.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
  transform: translate(20px, -20px);
}
@media (max-width: 991px) {
  .about-img img {
    display: block;
    transform: translate(0, 0);
    height: auto;
  }
}
.coding-panel {
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 5px;
  border: #ccc 1px solid;
  height: 80px;
  box-sizing: content-box;
}

.single-services {
  text-align: center;
  margin-top: 60px;
}


.single-services {
  text-align: center;
  margin-top: 60px;
}

.single-services .icon {
  font-size: 35px;
  color: #222;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-services h4 {
  margin-top: 30px;
  margin-bottom: 20px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-services p {
  max-width: 318px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.single-services:hover h4 {
  color: #8490ff;
}

.single-services:hover .icon {
  color: #8490ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
