// import NitishMain from '@/images/Nitish-main-img.jpeg'
// import NitishMainTemporary1 from '@/images/NitishMainTemporary-1.png'
import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'

// import featuredProject from '@/images/Nitish-hero-img-3.png'
import FadeInSection from './FadeInSection'
export const SectionHero = () => {
  return (
    <section id="comp-jwuch32x" className=" -mt-20 lg:mt-24  lg:py-10 ">
      <div
        id="bgLayers_comp-jwuch32x"
        data-hook="bgLayers"
        className="if7Vw2 mt-24 lg:mt-0 "
      >
        <div data-testid="colorUnderlay" className="tcElKx i1tH8h"></div>
        <div id="bgMedia_comp-jwuch32x" className="wG8dni"></div>
      </div>
      <div data-testid="columns" className="V5AUxf">
        <div
          id="comp-jwuch34k"
          className="comp-jwuch34k YzqVVZ wixui-column-strip__column"
        >
          <div
            id="bgLayers_comp-jwuch34k"
            data-hook="bgLayers"
            // className="MW5IWV"
          ></div>
          <div className="mx-6 lg:mx-0">
            <div className="-pt-34">
              <div
                id="SITE-TITLE"
                className=" -mt-36 px-[6%] py-[27%] min-[600px]:hidden  "
              >
                {/* <div className="BaOVQ8 tz5f0K comp-jwucjvdm wixui-rich-text -mt-4 mb-4 md:-mt-0  md:mb-4">
                  <div class="col-span-4 col-start-1 w-full max-w-2xl items-center justify-center lg:mt-44 lg:hidden xl:-mb-8 xl:flex-none">
                    <div class="relative  h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                      <img
                        className="h-[10rem]lg:h-[40rem] flex-auto rounded-t-2xl bg-white"
                        src={`${featuredProject.src}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div> */}
                <SiteTitle />
              </div>

              <div className="items-center justify-center gap-y-2 gap-x-4 md:grid md:grid-cols-10 lg:gap-x-8 xl:gap-x-20">
                <div id="DESKTOP-SITE-TITLE" className="max-[600px]:hidden">
                  <SiteTitle />
                </div>
                <div
                  className="MazNVa comp-l94l2olh wixui-image col-start-5 col-end-11"
                  title="Nitish-main-img"
                >
                  <div data-testid="linkElement" className="j7pOnl">
                    <wow-image
                      classNameName="HlRz5e BI8PVQ"
                      data-src="https://static.wixstatic.com/media/0b26de_437bf79c97c946229654539a5e2eeaa1~mv2.jpeg/v1/crop/x_260,y_0,w_838,h_846/fill/w_838,h_846,al_c,q_85,enc_auto/0b26de_437bf79c97c946229654539a5e2eeaa1~mv2.jpeg"
                    >
                      {/* <img
                        src={NitishMainTemporary1.src}
                        alt=""
                        fetchpriority="high"
                      /> */}
                    </wow-image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// GRID THREE IMAGE
;<div className="gap-y-2 gap-x-2 md:grid md:grid-cols-2">
  <div className="gid relative grid-cols-1 gap-x-2 ">
    {/* <div className="h-[4rem] " title="Nitish-main-img"> */}
    <div class=" w-full max-w-2xl xl:-mb-8 xl:flex-none">
      <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
        <img
          className="aspect-[2/1] w-full bg-gray-800 object-cover shadow-2xl"
          src={`${project2.src}`}
          alt=""
        />
      </div>
    </div>
    {/* </div>{' '} */}
    <div class="mt-14 h-full w-full max-w-2xl xl:-mb-8 xl:flex-none">
      <div class="relative aspect-[1/2] h-full xl:mx-0 xl:aspect-auto">
        <img
          className="aspect-[5/5] w-full bg-gray-800 object-cover shadow-2xl"
          src={`${projectXl2.src}`}
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="MazNVa comp-l94l2olh wixui-image" title="Nitish-main-img">
    <div data-testid="linkElement" className="j7pOnl">
      <wow-image
        classNameName="HlRz5e BI8PVQ"
        data-src="https://static.wixstatic.com/media/0b26de_437bf79c97c946229654539a5e2eeaa1~mv2.jpeg/v1/crop/x_260,y_0,w_838,h_846/fill/w_838,h_846,al_c,q_85,enc_auto/0b26de_437bf79c97c946229654539a5e2eeaa1~mv2.jpeg"
      >
        {/* <img src={NitishMain.src} alt="" fetchpriority="high" /> */}
      </wow-image>
    </div>
  </div>
</div>

const SiteTitle = () => {
  return (
    <div className=" pl-3  lg:-mt-10 lg:px-0">
      <h1 className="lg:font_4">
        <span style={{ fontSize: '36px', lineHeight: '1.05em' }}>
          <span className="md:px-0 lg:px-2">
            <span className="color_15  site-title">MARKETING </span>
          </span>
        </span>
      </h1>
      <p className="text-2 font_4 -mt-4  lg:-mt-4 lg:-mt-0 ">
        <span
          style={{
            fontFamily: 'poppins-extralight, poppins, sans-serif',
          }}
        >
          <span className="color_15 lg:font_5 lg:inline-flex">
            <span className="md:px-0">
              <span style={{ fontSize: '36px', lineHeight: '1.05em' }}>
                <span className="md:px-0 lg:px-2">
                  <span className="color_15  site-title">CONSULTANCY</span>
                  {/* <span className="color_15  site-title">Service</span> */}
                </span>
              </span>
              <div className="inline-flex">
                <span>
                  <h3
                    style={{
                      letterSpacing: '0.1em',
                    }}
                    className="mt-2 md:px-2 "
                  >
                    <FadeInSection>
                      Branding & Product Strategy.
                      <span>
                        {/* <h3
                        style={{
                          letterSpacing: '0.1em',
                        }}
                        className="md:px-2 "
                      > */}
                        Digital
                        {/* </h3> */}
                      </span>
                    </FadeInSection>
                  </h3>{' '}
                  <span className="lg:ml-2"> Marketing Development.</span>
                </span>
              </div>
            </span>
          </span>{' '}
        </span>
      </p>
    </div>
  )
}
