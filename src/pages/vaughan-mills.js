import React, { Fragment } from "react"
import ProjectPageLayout from "../components/projectPageLayout"
import MobileProjectPageLayout from "../components/mobileProjectPageLayout"
import {
  DesktopBreakpoint,
  MobileBreakpoint,
} from "../components/utilities/breakpoints"

const main = require(`../assets/images/web/7.png`)
const img1 = require(`../assets/images/web/vaughan-mills/1.png`)
const img2 = require(`../assets/images/web/vaughan-mills/2.png`)
const img3 = require(`../assets/images/web/vaughan-mills/3.png`)
const img4_1 = require(`../assets/images/web/vaughan-mills/4-1.png`)
const img4_2 = require(`../assets/images/web/vaughan-mills/4-2.png`)
const img5 = require(`../assets/images/web/vaughan-mills/5.png`)
const img6_1 = require(`../assets/images/web/vaughan-mills/6-1.png`)
const img6_2 = require(`../assets/images/web/vaughan-mills/6-2.png`)
const img7 = require(`../assets/images/web/vaughan-mills/7.png`)
const img8 = require(`../assets/images/web/vaughan-mills/8.png`)
const img9_1 = require(`../assets/images/web/vaughan-mills/9-1.png`)
const img9_2 = require(`../assets/images/web/vaughan-mills/9-2.png`)
const img10_1 = require(`../assets/images/web/vaughan-mills/10-1.png`)
const img10_2 = require(`../assets/images/web/vaughan-mills/10-2.png`)

const VaughanMills = () => (
  <Fragment>
    <DesktopBreakpoint>
      <ProjectPageLayout heading="07/Vaughan Mills">
        <Fragment>
          <img src={main} alt="Vaughan Mills" />
        </Fragment>
        <Fragment>
          <p>
            Vaughan Mills is a stylist who we have worked closely with across a
            variety of creative projects. The following series of images are
            from recent photoshoots featuring his vintage collection.
          </p>
        </Fragment>
        <Fragment>
          <img
            src={img1}
            alt="Vaughan Mills"
            style={{ width: "30%", marginLeft: "20%" }}
          />
        </Fragment>
        <Fragment>
          <img src={img2} alt="Vaughan Mills" />
        </Fragment>
        <Fragment>
          <img src={img3} alt="Vaughan Mills" style={{ marginLeft: "30%" }} />
        </Fragment>
        <Fragment>
          <img src={img4_1} alt="Vaughan Mills" style={{ width: "40%" }} />
          <img src={img4_2} alt="Vaughan Mills" style={{ width: "30%" }} />
        </Fragment>
        <Fragment>
          <img
            src={img5}
            alt="Vaughan Mills"
            style={{ width: "40%", marginLeft: "30%", marginTop: "10%" }}
          />
        </Fragment>
        <Fragment>
          <img src={img6_1} alt="Vaughan Mills" style={{ width: "30%" }} />
          <img src={img6_2} alt="Vaughan Mills" style={{ width: "30%" }} />
        </Fragment>
        <Fragment>
          <img src={img7} alt="Vaughan Mills" style={{ width: "35%" }} />
        </Fragment>
        <Fragment>
          <img src={img8} alt="Vaughan Mills" style={{ width: "60%" }} />
        </Fragment>
        <Fragment>
          <img src={img9_1} alt="Vaughan Mills" style={{ width: "30%" }} />
          <img src={img9_2} alt="Vaughan Mills" style={{ width: "20%" }} />
        </Fragment>
        <Fragment>
          <img src={img10_1} alt="Vaughan Mills" style={{ width: "30%" }} />
          <img src={img10_2} alt="Vaughan Mills" style={{ width: "30%" }} />
        </Fragment>
      </ProjectPageLayout>
    </DesktopBreakpoint>

    <MobileBreakpoint>
      <MobileProjectPageLayout heading="07/Vaughan Mills">
        <Fragment>
          <img
            src={main}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <p>
            Vaughan Mills is a stylist who we have worked closely with across a
            variety of creative projects. The following series of images are
            from recent photoshoots featuring his vintage collection.
          </p>
        </Fragment>
        <Fragment>
          <img
            src={img1}
            alt="Vaughan Mills"
            style={{ width: "85%", marginLeft: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img src={img2} alt="Vaughan Mills" style={{ width: "100%" }} />
        </Fragment>
        <Fragment>
          <img
            src={img3}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img src={img4_1} alt="Vaughan Mills" style={{ width: "100%" }} />
        </Fragment>
        <Fragment>
          <img src={img4_2} alt="Vaughan Mills" style={{ width: "100%" }} />
        </Fragment>
        <Fragment>
          <img
            src={img5}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img
            src={img6_1}
            alt="Vaughan Mills"
            style={{ width: "85%", marginLeft: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img
            src={img6_2}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img
            src={img7}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img src={img8} alt="Vaughan Mills" style={{ width: "100%" }} />
        </Fragment>
        <Fragment>
          <img src={img9_1} alt="Vaughan Mills" style={{ width: "100%" }} />
        </Fragment>
        <Fragment>
          <img src={img9_2} alt="Vaughan Mills" style={{ width: "80%" }} />
        </Fragment>
        <Fragment>
          <img
            src={img10_1}
            alt="Vaughan Mills"
            style={{ width: "85%", marginRight: "auto" }}
          />
        </Fragment>
        <Fragment>
          <img src={img10_2} alt="Vaughan Mills" style={{ width: "80%" }} />
        </Fragment>
      </MobileProjectPageLayout>
    </MobileBreakpoint>
  </Fragment>
)

export default VaughanMills