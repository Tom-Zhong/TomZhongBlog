<template>
  <!-- start footer Area -->
  <footer class="footer-area section-gap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h4>关于我</h4>
            <p>非CS科班出身，因小时候看到了电脑这种小小的盒子竟然能够打游戏听音乐看视频，而被深深吸引了，长大立志要做一名小小程序员。本网站是用来分享生活，技术，如果有什么问题，可以直接联系大贵。</p>
            <p class="footer-text">
              Copyright &copy;
              {{getCurrentYear}}
              <i
                class="fa fa-heart-o"
                aria-hidden="true"
              ></i> by
              <a href="/about">Tom Zhong</a>
              , Inspired by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
            <!-- <p>
              <a href="http://beian.miit.gov.cn/" style="color: #fff">京ICP备17028968号</a>
            </p> -->
          </div>
        </div>
        <!-- <div class="col-lg-5 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest trends</p>
            <div class id="mc_embed_signup">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
              >
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    name="EMAIL"
                    placeholder="Enter Email Address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Email Address '"
                    required
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                      <span class="lnr lnr-arrow-right"></span>
                    </button>
                  </div>
                  <div class="info"></div>
                </div>
              </form>
            </div>
          </div>
        </div>-->
        <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
          <div class="single-footer-widget">
            <h4>联系我</h4>
            <p>小手点点关注，生活多快乐。</p>
            <div class="footer-social d-flex align-items-center">
              <a href="#" class="mr-10">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <path
                    style="fill:#EA533B;"
                    d="M403.51,247.992c12.189-23.721,13.499-45.899,3.546-63.137
	c-10.316-17.868-31.605-28.033-59.944-28.622c-20.81-0.427-44.439,4.311-68.131,13.528c8.166-27.851,5.532-49.961-7.876-63.369
	c-16.113-16.113-44.899-16.666-81.056-1.558c-33.715,14.088-70.764,40.33-104.325,73.889
	c-49.982,49.983-83.19,107.958-84.779,147.93C0.318,330.616,0,334.579,0,338.441c0,35.793,25.09,69.017,70.648,93.547
	c43.858,23.617,101.979,36.622,163.656,36.622s119.798-13.005,163.656-36.622c45.558-24.53,70.648-57.754,70.648-93.547
	C468.609,304.067,445.576,272.184,403.51,247.992z"
                  />
                  <path
                    style="fill:#D93C1C;"
                    d="M260.338,459.932c-61.677,0-119.798-13.005-163.656-36.622
	c-45.558-24.53-70.648-57.754-70.648-93.547c0-3.863,0.318-7.825,0.945-11.787c1.589-39.973,34.797-97.947,84.78-147.93
	c33.227-33.226,69.87-59.27,103.314-73.458c-7.854,1.823-16.218,4.566-25.023,8.245c-33.715,14.088-70.764,40.33-104.325,73.889
	C35.742,228.707,2.534,286.682,0.945,326.654C0.318,330.616,0,334.579,0,338.441c0,35.793,25.09,69.017,70.648,93.547
	c43.858,23.617,101.979,36.622,163.656,36.622c48.616,0,95.016-8.086,133.969-23.074
	C335.352,454.941,298.529,459.932,260.338,459.932z"
                  />
                  <path
                    style="fill:#FFFFFF;"
                    d="M364.19,312.032c-2.568-29.565-22.081-55.61-54.944-73.338
	c-31.681-17.091-72.302-24.49-114.382-20.835c-42.079,3.656-80.818,17.949-109.076,40.247
	c-29.314,23.131-44.045,52.151-41.476,81.715c2.569,29.565,22.082,55.61,54.946,73.338c26.389,14.236,58.976,21.748,93.447,21.747
	c6.913,0,13.905-0.302,20.934-0.913c42.079-3.654,80.817-17.948,109.075-40.246C352.029,370.616,366.758,341.596,364.19,312.032z"
                  />
                  <path
                    style="fill:#E5E5E5;"
                    d="M230.36,425.319c-7.029,0.611-14.021,0.913-20.934,0.913c-34.471,0.001-67.059-7.511-93.447-21.747
	c-32.863-17.729-52.378-43.774-54.946-73.338c-2.569-29.564,12.161-58.584,41.476-81.715c5.799-4.575,12.046-8.808,18.665-12.687
	c-12.993,5.932-24.911,13.095-35.388,21.361c-29.314,23.131-44.045,52.151-41.476,81.715c2.569,29.565,22.082,55.61,54.946,73.338
	c26.389,14.236,58.976,21.748,93.447,21.747c6.913,0,13.905-0.302,20.934-0.913c33.445-2.905,64.771-12.535,90.41-27.559
	C281.994,416.503,256.841,423.019,230.36,425.319z"
                  />
                  <path
                    style="fill:#333333;"
                    d="M286.65,312.533c-9.507-39.544-55.55-62.508-102.638-51.189
	c-47.088,11.32-77.661,52.703-68.156,92.249c4.682,19.473,18.156,35.492,37.943,45.105c12.283,5.967,26.102,9.003,40.355,9.003
	c8.042,0,16.221-0.967,24.339-2.918C265.582,393.462,296.157,352.08,286.65,312.533z"
                  />
                  <circle style="fill:#FFFFFF;" cx="177.898" cy="351.457" r="30.373" />
                  <g>
                    <path
                      style="fill:#FFA929;"
                      d="M373.152,117.153c-7.189,0-13.017,5.828-13.017,13.017c0,7.189,5.828,13.017,13.017,13.017
		c26.318,0,47.729,21.411,47.729,47.729c0,7.189,5.828,13.017,13.017,13.017s13.017-5.828,13.017-13.017
		C446.914,150.243,413.824,117.153,373.152,117.153z"
                    />
                    <path
                      style="fill:#FFA929;"
                      d="M364.475,43.39c-3.261,0-6.564,0.108-9.817,0.322c-9.564,0.629-16.808,8.893-16.18,18.458
		c0.629,9.564,8.9,16.804,18.458,16.18c2.498-0.164,5.035-0.248,7.539-0.248c62.206,0,112.813,50.608,112.813,112.813
		c0,7.606-0.759,15.204-2.257,22.581c-1.396,6.875,1.691,14.209,7.576,18.025c5.99,3.884,14.111,3.587,19.829-0.675
		c3.388-2.525,5.774-6.307,6.614-10.445c1.958-9.646,2.95-19.566,2.95-29.487C512,109.571,445.82,43.39,364.475,43.39z"
                    />
                  </g>
                  <circle style="fill:#FFFFFF;" cx="234.305" cy="321.085" r="17.356" />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </a>
              <a href="#" class="mr-10">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 112.196 112.196"
                  style="enable-background:new 0 0 112.196 112.196;"
                  xml:space="preserve"
                >
                  <g>
                    <circle style="fill:#3B5998;" cx="56.098" cy="56.098" r="56.098" />
                    <path
                      style="fill:#FFFFFF;"
                      d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
		c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
                    />
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </a>
              <a href="#" class="mr-10">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 502.073 502.073"
                  style="enable-background:new 0 0 502.073 502.073;"
                  xml:space="preserve"
                >
                  <path
                    style="fill:#FFD15C;"
                    d="M501.812,481.176c0,6.269-2.09,11.494-6.269,15.673c-4.18,3.135-8.359,5.224-14.629,5.224H21.159
	c-5.224,0-10.449-2.09-14.629-5.224c-4.18-4.18-6.269-9.404-6.269-15.673V175.02h501.551V481.176z"
                  />
                  <path
                    style="fill:#F8B64C;"
                    d="M495.543,496.849c-4.18,3.135-8.359,5.224-14.629,5.224H21.159c-5.224,0-10.449-2.09-14.629-5.224
	l244.506-210.024L495.543,496.849z"
                  />
                  <path
                    style="fill:#40596B;"
                    d="M501.812,175.02l-71.053,51.2L264.62,345.339c-8.359,6.269-19.853,6.269-28.212,0L71.314,226.22
	l-71.053-51.2l71.053-51.2L225.959,13.061l11.494-8.359c8.359-6.269,19.853-6.269,28.212,0l11.494,8.359l74.188,53.29l36.571,26.122
	l42.841,31.347L501.812,175.02z"
                  />
                  <path
                    style="fill:#F2F2F2;"
                    d="M430.759,77.845V226.22L264.62,345.339c-8.359,6.269-19.853,6.269-28.212,0L71.314,226.22V33.959
	c0-11.494,9.404-20.898,20.898-20.898h272.718L430.759,77.845z"
                  />
                  <path
                    style="fill:#CDD6E0;"
                    d="M365.975,61.127c0,9.404,7.314,16.718,16.718,16.718h48.065l-64.784-64.784L365.975,61.127
	L365.975,61.127z"
                  />
                  <path
                    style="fill:#FF7058;"
                    d="M312.686,223.086h16.718c-5.224,11.494-13.584,19.853-25.078,26.122
	c-12.539,7.314-28.212,10.449-47.02,10.449c-17.763,0-33.437-3.135-45.976-9.404c-12.539-6.269-22.988-14.629-29.257-27.167
	c-6.269-11.494-9.404-25.078-9.404-38.661c0-15.673,3.135-29.257,10.449-42.841c7.314-13.584,16.718-22.988,29.257-29.257
	c12.539-6.269,27.167-9.404,42.841-9.404c13.584,0,26.122,3.135,36.571,8.359c10.449,5.224,18.808,12.539,24.033,22.988
	c5.224,9.404,8.359,20.898,8.359,32.392c0,13.584-4.18,26.122-12.539,37.616c-10.449,14.629-24.033,20.898-40.751,20.898
	c-4.18,0-8.359-1.045-10.449-2.09c-2.09-2.09-4.18-4.18-4.18-7.314c-6.269,6.269-13.584,9.404-21.943,9.404
	c-9.404,0-16.718-3.135-21.943-9.404c-6.269-6.269-9.404-14.629-9.404-25.078c0-12.539,3.135-24.033,10.449-35.527
	c8.359-12.539,19.853-18.808,33.437-18.808c9.404,0,16.718,4.18,21.943,11.494l2.09-9.404h21.943l-12.539,58.514
	c-1.045,4.18-1.045,6.269-1.045,7.314s0,2.09,1.045,3.135s1.045,1.045,2.09,1.045c2.09,0,6.269-2.09,10.449-5.224
	c5.224-4.18,10.449-9.404,13.584-16.718c3.135-7.314,5.224-14.629,5.224-21.943c0-13.584-5.224-25.078-14.629-33.437
	c-9.404-9.404-22.988-13.584-40.751-13.584c-14.629,0-27.167,3.135-37.616,9.404c-10.449,6.269-17.763,14.629-22.988,25.078
	s-7.314,21.943-7.314,34.482c0,11.494,3.135,21.943,8.359,31.347c6.269,9.404,13.584,16.718,24.033,20.898
	c10.449,4.18,21.943,6.269,35.527,6.269c12.539,0,24.033-2.09,33.437-5.224C299.102,235.624,306.416,230.4,312.686,223.086z
	 M223.869,189.649c0,7.314,1.045,11.494,4.18,15.673c3.135,3.135,6.269,5.224,10.449,5.224c3.135,0,6.269-1.045,8.359-2.09
	c2.09-1.045,4.18-3.135,6.269-5.224c3.135-3.135,5.225-8.359,7.314-14.629c2.09-6.269,3.135-12.539,3.135-17.763
	c0-6.269-1.045-10.449-4.18-14.629c-3.135-3.135-6.269-5.224-10.449-5.224c-4.18,0-9.404,2.09-12.539,5.224
	c-4.18,3.135-7.314,8.359-9.404,15.673C224.914,178.155,223.869,184.424,223.869,189.649z"
                  />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </a>
              <a href="#" class="mr-10">
                <i class="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End footer Area -->
</template>
<script>
export default {
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.section-gap {
  padding: 120px 0;
}
/* =================================== */
/*  Footer Styles
/* =================================== */
.footer-area {
  background-color: #04091e;
}

.single-footer-widget h4 {
  color: #fff !important;
  margin-bottom: 25px;
  font-weight: 500;
}

.single-footer-widget .form-control {
  border: none;
  width: 80% !important;
  font-weight: 300;
  background: #f9f9ff;
  padding-left: 20px;
  border-radius: 0;
  font-size: 14px;
  line-height: normal !important;
  color: #222;
}

.single-footer-widget .form-control:focus {
  box-shadow: none;
  color: #222;
}

.single-footer-widget ul li {
  margin-bottom: 10px;
}

.single-footer-widget ul li a {
  color: #777777;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-footer-widget ul li a:hover {
  color: #8490ff;
}

.single-footer-widget .bb-btn {
  color: #8490ff;
  color: #fff;
  font-weight: 300;
  border-radius: 0;
  z-index: 9999;
  cursor: pointer;
}

.single-footer-widget .info {
  margin-top: 25px;
  color: #fff;
  font-size: 12px;
}

.single-footer-widget .info.valid {
  color: green;
}

.single-footer-widget .info.error {
  color: red;
}

.single-footer-widget .btn {
  font-size: 1.2rem;
  border-radius: 0;
  background: #8490ff;
  color: #fff;
}

.single-footer-widget .btn .lnr {
  line-height: inherit;
  font-size: 13px;
  padding: 0px 4px;
}

.single-footer-widget ::-moz-selection {
  /* Code for Firefox */
  background-color: #191919 !important;
  color: #777777;
}

.single-footer-widget ::selection {
  background-color: #191919 !important;
  color: #777777;
}

.single-footer-widget ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #777777;
  font-weight: 300;
}

.single-footer-widget :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

.single-footer-widget ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

.single-footer-widget :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #777777;
  font-weight: 300;
}

.single-footer-widget ::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #777777;
  font-weight: 300;
}

@media (max-width: 991.98px) {
  .single-footer-widget {
    margin-bottom: 30px;
  }
}

.single-footer-widget .footer-social a {
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: center;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.single-footer-widget .footer-social a i {
  vertical-align: bottom;
  color: #fff;
}

.single-footer-widget .footer-social a:hover i {
  color: #8490ff;
}

.footer-bottom {
  padding-top: 50px;
}

.footer-bottom .footer-social {
  text-align: right;
}

@media (max-width: 991px) {
  .footer-bottom .footer-social {
    text-align: left;
    margin-top: 30px;
  }
}

.footer-bottom .lnr,
.footer-bottom a {
  color: #8490ff;
}

.footer-text a {
  color: #8490ff;
}

/*-------- end footer Area -------------*/
</style>

