"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function AboutMePage() {
        <div>
        
            <h1 className={title()}>Chemistry Unit Conclusions</h1>


            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center"></h6>
                <img src="a.jpg" alt="Self Img" width="300" height="200"></img>
                <p className="text-center">Properties of Matter: Distinguishes between physical properties (malleability, density) and chemical properties (reactivity, flammability). It also notes the difference between intensive (size-independent) and extensive (size-dependent) properties.</p>
                <p className="text-center">Changes: Covers physical changes (phase changes like melting/sublimation) versus chemical changes (explosions/burning) where new substances are formed.</p>
                <p className="text-center">Classification: Breaks down matter into elements, compounds, and mixtures (homogeneous vs. heterogeneous).</p>
                <p className="text-center">Separation Techniques: filtration, distillation, sublimation, crystallization and chromatography.</p>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Structure of the Atoms</h6>
                <img src="https://static.vecteezy.com/system/resources/previews/009/488/329/original/athlete-stick-man-swim-in-sea-black-silhouette-icon-sport-swimmer-dive-in-pool-glyph-pictogram-human-simple-figure-motion-in-water-flat-symbol-people-swim-on-beach-isolated-illustration-vector.jpg" alt="Cool Img" width="400" height="250"></img>
                <p className="text-center">Atomic History: Tracks the evolution of the atom from Dalton’s "Billiard Ball" to Thomson’s "Plum Pudding," Rutherford’s "Gold Foil" (nucleus discovery), and the modern Electron Cloud model.</p>
                <p className="text-center">Atomic Structure: Defines protons, neutrons, electrons, ions (charged atoms), and isotopes (same element, different mass).</p>
                <p className="text-center">Radioactivity: Explains nuclear stability and the three types of decay: Alpha (loss of He nucleus), Beta (neutron to proton change), and Gamma (high-energy radiation).</p>
                <a className="bg-cyan-500 text-center" href="https://play.google.com/store/apps/details?id=com.active.aps.meetmobile&hl=en-US">An app for swimmer to track their swim meets</a>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Electron in atoms</h6>
                <img className="justify-center" src="https://homdgcat.wiki/images/lightconemaxfigures/23025.png" alt="Cool Img" width="450" height="200"></img>
                <p className="text-center">Wave Mechanics: Relates wavelength and frequency to the electromagnetic spectrum and explains atomic emission spectra (the "fingerprint" of elements).</p>
                <p className="text-center">Quantum Theory: Introduces energy levels ($n$), sublevels ($s, p, d, f$), and orbitals.</p>
                <p className="text-center">Electron Mapping: Outlines the Aufbau Principle (fill lowest energy first), Pauli Exclusion Principle (opposite spins), and Hund’s Rule (don't pair up until necessary).</p>
                <Button as={link} className="bg-cyan-600 " href="https://homdgcat.wiki/sr/char?lang=CH#_1310">A database</Button>
            </div>
            <hr></hr>
            <div className="flex flex-wrap">
                <h6 className="text-4xl text-center">Important things to my life</h6>
                <img src="https://tse4.mm.bing.net/th/id/OIP.Ia3dqYo0pQArdg_pQS-WMAHaE7?rs=1&pid=ImgDetMain" alt="$$$" width="500" height="300"></img>
                <p className="text-center">Money is important, money can buy most things wanted in the world and be it can buy food for me to survive.</p>
            </div>
        
        </div>
    );

}
