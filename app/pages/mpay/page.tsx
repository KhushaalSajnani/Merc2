"use client"

import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import HoverCard from '../../components/hoverCard/HoverCard'
import expandIcon from "../../../public/assets/icons/expand.svg"
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export default function Mpay() {

  const mPayCards = {
    height: '500px'
  };

  return (
    <>

    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={19}
              customHeaderCss="font-bold"
              childName="mPayBrief"
              h2Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <GridChild 
              childId={5}
              childName="mPayHeroImage"
            />
        </GridContainer>
    </section>

    <motion.section 
        className='m-auto w-full max-parent-grid-container-width pb-60'
        variants={fadeInAnimationVariants}
              initial = "initial"
              whileInView = "animate"
              viewport={{
                once: true,
              }}
    >
        
        <GridContainer gridCols="grid-cols-3 smTablet:grid-cols-2 lgTablet:grid-cols-2 max709px:grid-cols-1">
              <HoverCard
                heading="Payment Card For Every Purpose"
                hoverText="Mpay cards fulfill a wide array of purposes, offering a customized solution for your specific needs, including payroll, travel, prepaid, and specialized cards, our solutions are tailored to meet your requirements."
                backgroundColor="#FFE8E9"
                // customStyle={customStyles}
                imageSrc={expandIcon.src}
                customStyle={mPayCards}
              />
              <HoverCard
                heading="Accepted Across The UAE"
                hoverText="Mpay cards are accepted across the UAE at merchants and ATMs."
                backgroundColor="#DAF0EA"
                // customStyle={customStyles}
                imageSrc={expandIcon.src}
                customStyle={mPayCards}
              />
              <HoverCard
                heading="Accepted WorldWide"
                hoverText="Mpay offers international acceptance through Discover Global Network & bilateral partnerships."
                backgroundColor="#F3F3F3"
                // customStyle={customStyles}
                imageSrc={expandIcon.src}
                customStyle={mPayCards}
              />
              {/* <GridChild 
                childId={20}
                customHeaderCss="font-medium"
                childName="mPayFeatureOne !justify-between bg-tintRed p-10"
                h3Order={1}
                modalTriggerOrder={2}
              />
            <GridChild 
              childId={21}
              customHeaderCss="font-medium"
              childName="mPayFeatureTwo !justify-between bg-tintGreen p-10"
              h3Order={1}
              modalTriggerOrder={2}
            />
            <GridChild 
              childId={22}
              customHeaderCss="font-medium"
              childName="mPayFeatureThree !justify-between bg-tintGray p-10"
              h3Order={1}
              modalTriggerOrder={2}
            /> */}
        </GridContainer>
    </motion.section>

    <section className='m-auto w-full max-parent-grid-container-width pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={23}
              customHeaderCss="font-medium"
              childName="OurNetwork"
            />
        </GridContainer>
    </section>
    
    <section className='m-auto w-full max-parent-grid-container-width pb-60'>
        <GridContainer gridCols="grid-cols-3 smTablet:grid-cols-2 lgTablet:grid-cols-2 max709px:grid-cols-1">
            <GridChild 
              childId={24}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
            <GridChild 
              childId={25}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
            <GridChild 
              childId={26}
              customHeaderCss=""
              childName="networkOne !justify-between text-center border rounded-xl p-10"
              h2Order={1}
              h4Order={2}
            />
        </GridContainer>
    </section>


    {/* contact us and footer sections */}
    </>
  )
}