<script setup>
import { useLayout } from "@/layout/composables/layout";
import { computed, ref } from "vue";
import AppConfig from "@/layout/AppConfig.vue";
import ClientsView from "./ClientsView.vue";

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
};

const logoUrl = computed(() => {
  // return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
  return `layout/images/logo.png`;
});
</script>

<template>
  <div class="surface-0 flex justify-content-center">
    <div id="home" class="landing-wrapper overflow-hidden">
      <div
        class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3"
      >
        <a class="flex align-items-center" href="#">
          <img
            :src="logoUrl"
            alt="Sakai Logo"
            height="50"
            class="mr-0 lg:mr-2"
          />
        </a>

        <div
          class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2"
          style="top: 120px"
        >
          <ul
            class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer"
          >
            <li>
              <a
                @click="smoothScroll('#hero')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#services')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#clients')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Clients</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#projects')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#contact-us')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
          <div
            class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0"
          >
            <Button
              label="Login"
              class="p-button-text p-button-rounded border-none font-light line-height-2 text-blue-500"
            ></Button>
            <Button
              label="Register"
              class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"
            ></Button>
          </div>
        </div>
      </div>

      <div
        id="hero"
        class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
        style="
          background: linear-gradient(to bottom, #0068b2, #66ccff);
          clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
        "
      >
        <div class="mx-4 md:mx-8 mt-0 md:mt-4 my-4">
          <h1 class="text-6xl font-bold text-gray-900 line-height-2">
            <span class="font-light block">Our Vision</span>Ensures excellence
            in Electrical, instrumentation, Automation & Control.
          </h1>
          <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">
            We are involved in diversified areas of engineering activities
            including detail engineering, installation, commissioning services.
            We also provide backup sales of international products, while
            maintaining their specialized role in specific areas.
          </p>
          <Button
            label="Our History"
            class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"
          ></Button>
        </div>
      </div>

      <div id="services" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
        <div class="grid justify-content-center">
          <div class="col-12 text-center mt-8 mb-4">
            <h2 class="text-900 font-normal mb-2">Our Services</h2>
            <span class="text-600 text-2xl">We serve in multi discipline.</span>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(187, 199, 205, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(187, 199, 205, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-plus text-2xl text-yellow-700"></i>
                </div>
                <h5 class="mb-2 text-900">System Integration</h5>
                <span class="text-600">Posuere morbi leo urna molestie.</span>
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(251, 199, 145, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(172, 180, 223, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-bolt text-2xl text-cyan-700"></i>
                </div>
                <h5 class="mb-2 text-900">SIS Proof Testing</h5>
                <span class="text-600">Semper risus in hendrerit.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(172, 180, 223, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(172, 180, 223, 0.2),
                    rgba(246, 158, 188, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-indigo-200"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-wrench text-2xl text-indigo-700"></i>
                </div>
                <h5 class="mb-2 text-900">
                  Installation and Commissioning Services
                </h5>
                <span class="text-600"
                  >Non arcu risus quis varius quam quisque.</span
                >
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(251, 199, 145, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(145, 210, 204, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-cog text-2xl text-bluegray-700"></i>
                </div>
                <h5 class="mb-2 text-900">Engineering</h5>
                <span class="text-600">Nulla malesuada pellentesque elit.</span>
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(246, 158, 188, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(160, 210, 250, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-orange-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-id-card text-2xl text-orange-700"></i>
                </div>
                <h5 class="mb-2 text-900">P&ID Development</h5>
                <span class="text-600">Condimentum lacinia quis vel eros.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(251, 199, 145, 0.2),
                    rgba(246, 158, 188, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(172, 180, 223, 0.2),
                    rgba(212, 162, 221, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-pink-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-wrench text-2xl text-pink-700"></i>
                </div>
                <h5 class="mb-2 text-900">Maintenance and Repair Services</h5>
                <span class="text-600"
                  >Convallis tellus id interdum velit laoreet.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 210, 204, 0.2),
                    rgba(160, 210, 250, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(145, 210, 204, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-teal-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-sync text-2xl text-teal-700"></i>
                </div>
                <h5 class="mb-2 text-900">Calibration Services</h5>
                <span class="text-600">Mauris sit amet massa vitae.</span>
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 210, 204, 0.2),
                    rgba(212, 162, 221, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(251, 199, 145, 0.2),
                    rgba(160, 210, 250, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-blue-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                </div>
                <h5 class="mb-2 text-900">On-Site training</h5>
                <span class="text-600"
                  >Elementum nibh tellus molestie nunc non.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
            <div
              style="
                height: 160px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(160, 210, 250, 0.2),
                    rgba(212, 162, 221, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(246, 158, 188, 0.2),
                    rgba(212, 162, 221, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-purple-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                </div>
                <h5 class="mb-2 text-900">Development of BPCS & ESD System</h5>
                <span class="text-600">Neque egestas congue quisque.</span>
              </div>
            </div>
          </div>

          <div
            class="col-12 mt-8 mb-8 p-2 md:p-8"
            style="
              border-radius: 20px;
              background: linear-gradient(
                  0deg,
                  rgba(255, 255, 255, 0.6),
                  rgba(255, 255, 255, 0.6)
                ),
                radial-gradient(
                  77.36% 256.97% at 77.36% 57.52%,
                  #efe1af 0%,
                  #c3dcfa 100%
                );
            "
          >
            <div
              class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0"
            >
              <h3 class="text-gray-900 mb-2">Ahsan Mumtaz</h3>
              <span class="text-gray-600 text-2xl"
                >CEO Global Technology Concern</span
              >
              <p
                class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                style="max-width: 800px"
              >
                “Global Technology Concerns is committed to provide its
                customers with Industrial Automation & Electrical Control
                equipment of finest quality, properly elected, in-time delivered
                to end users. Our goal is to leave no customer unsatisfied.”
              </p>
              <!-- <img src="/demo/images/landing/peak-logo.svg" class="mt-4" alt="Company logo" /> -->
            </div>
          </div>
        </div>
      </div>
      <div id="clients" class="col-12 text-center mt-8 mb-4">
        <h2 class="text-900 font-normal mb-2">Our Clients</h2>
        <span class="text-600 text-2xl">Our clients are pride for us.</span>
        <ClientsView />
      </div>

      <div id="projects" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
        <div class="text-center">
          <h2 class="text-900 font-normal mb-2">Our Projects</h2>
          <span class="text-600 text-2xl"
            >We build trust with our clients by adding value to their
            deliverables. We focus on client’s priorities and accomplish
            projects on time and within budget. Our main concern is to provide
            optimal and cost-effective solutions.</span
          >
        </div>

        <div class="grid mt-8 pb-2 md:pb-8">
          <div
            class="flex justify-content-center col-12 lg:col-4 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
            style="border-radius: 8px"
          >
            <img
              src=""
              class="w-11"
              alt="project image"
            />
          </div>

          <div
            class="col-12 lg:col-8 my-auto flex flex-column lg:align-items-end text-center lg:text-right"
          >
            PAKISTAN OIL FIELDS
            <h2 class="line-height-1 text-900 text-4xl font-normal">
              Integrating ATG system
            </h2>
            <span
              class="text-700 text-2xl line-height-3 ml-0 md:ml-2"
              style="max-width: 850px"
            >
              This project include the procurement of
              <strong> Saab-Rosemount Tank Control Radar Type</strong>
              ATG system. It also include the excavation, back filling,
              conducting, cable & cable tray laying along with installation,
              testing and commissioning of radar level gauging system at Khor
              Filed.
            </span>
          </div>
        </div>

        <div class="grid my-8 pt-2 md:pt-8">
          <div
            class="col-12 lg:col-8 my-auto flex flex-column text-center lg:text-left lg:align-items-start"
          >
            ATTOCK REFINERY LIMITED
            <h2 class="line-height-1 text-900 text-4xl font-normal">
              Integrating ATG system
            </h2>
            <span
              class="text-700 text-2xl line-height-3 mr-0 md:mr-2"
              style="max-width: 850px"
            >
              Thi project include the procurement, installation, testing and
              commissioning of <strong>Saab Radar Gauges</strong>. It also
              include excavation, back filling, conduiting, cable with cable
              tray laying and mounting of weather proof junction boxes.
            </span>
          </div>

          <div
            class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-4 bg-yellow-100 p-0"
            style="border-radius: 8px"
          >
            <img
              src=""
              class="w-11"
              alt="project image"
            />
          </div>
        </div>
        <div class="grid mt-8 pb-2 md:pb-8">
          <div
            class="flex justify-content-center col-12 lg:col-4 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
            style="border-radius: 8px"
          >
            <img
              src=""
              class="w-11"
              alt="project image"
            />
          </div>

          <div
            class="col-12 lg:col-8 my-auto flex flex-column lg:align-items-end text-center lg:text-right"
          >
            CALTEX OIL (PAKISTAN) LIMITED
            <h2 class="line-height-1 text-900 text-4xl font-normal">
              PLC Base Fire/ESD System
            </h2>
            <span
              class="text-700 text-2xl line-height-3 ml-0 md:ml-2"
              style="max-width: 850px"
            >
              This project include the procurement, installation, testing and
              commissioning of PLC based Fire/ESD system, consisting of PLC,
              optical/UV, electrical and pneumatic components at LPG pland
              Dhurnal.
            </span>
          </div>
        </div>
        <div class="grid my-8 pt-2 md:pt-8">
          <div
            class="col-12 lg:col-8 my-auto flex flex-column text-center lg:text-left lg:align-items-start"
          >
            UNITED ENERGY PAKISTAN LTD (UEP)
            <h2 class="line-height-1 text-900 text-4xl font-normal">
              Integrating ATG system
            </h2>
            <span
              class="text-700 text-2xl line-height-3 mr-0 md:mr-2"
              style="max-width: 850px"
            >
              This is a joint venture of GTC with Pipe-link Contructors (Pvt.)
              (Ltd.). GTC provide its experties as sub-contractor to assist
              Pipe-link Constructors. It include the installation, testing and
              commissioning of both instrumentation and electrical work like
              Control Valve, PI‘s, DPI‘s, Solenoid Valve, Temperature Recorders,
              Pressure recorders, F&G, UPS ESD system with all required
              accessories. It also include excavation, back filling, conduiting,
              cable laying, fabrication of panels stands, earthing and area
              lighting.
            </span>
          </div>

          <div
            class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-4 bg-yellow-100 p-0"
            style="border-radius: 8px"
          >
            <img
              src=""
              class="w-11"
              alt="project image"
            />
          </div>
        </div>
      </div>

      <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
        <div class="grid justify-content-between">
          <div class="col-12 md:col-2" style="margin-top: -1.5rem">
            <a
              @click="smoothScroll('#home')"
              class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
            >
              <img
                :src="logoUrl"
                alt="footer sections"
                width="200"
                height="50"
                class="mr-2"
              />
            </a>
            <hr/>
            <h4>Global Technology Concerns <br/>Provision of Industrial of Instrumentation and Electrical Equipment <br/> Project Developments and Installation and commissioning Services</h4>
          </div>

          <div class="col-12 md:col-10 lg:col-7">
            <div class="grid text-center md:text-left">
              <div id="contact-us" class="col-12 md:col-3">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Contact Us
                </h4>
                <p
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >
                  <i class="pi pi-map-marker" /> 16 A Abbot Road, Royal Park,
                  Lahore, Pakistan.
                </p>
                <p
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                >
                  <a href="mailto:GLOBAL.TC@OUTLOOK.COM">
                    <i class="pi  "> gloal.tc@outlook.com</i>
                  </a>
                </p>

               
              </div>
              <div class="col-12 md:col-3">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Company
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >About Us</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >News</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Client Relations</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Careers</a
                >
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Community
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >FAQ</a
                >
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Social Media
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  ><i class="pi pi-facebook"
                /></a>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  ><i class="pi pi-instagram"
                /></a>
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  ><i class="pi pi-linkedin"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<!-- <style scoped>
#hero {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);
    height: 700px;
    overflow: hidden;
}

@media screen and (min-width: 768px) {
    #hero {
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px) {
    #hero > img {
        position: absolute;
    }

    #hero > div > p {
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px) {
    #hero {
        height: 600px;
    }

    #hero > img {
        position: static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}
</style> -->
