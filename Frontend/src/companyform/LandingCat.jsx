import React from 'react';
import "./LandingCat.scss"
import {BsCodeSlash} from "react-icons/bs"


const LandingCat = () => {
    return (
        <div>
            <section class="home-category">
                <div class="header">
                    <h1>CorpoShare<span> <br /> Categories.</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nostrum dignissimos sequi
                        delectus quos recusandae nobis id. Nihil non laboriosam reprehenderit perferendis id mollitia
                        dolore eos, asperiores, illum nam autem!</p>
                </div>
                <div class="list">
                    <div class="one">
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Development & IT</h1>
                                <p>Development & IT services offer a wide range of technical solutions, including software development, website creation, IT consulting, and cybersecurity. These services enhance business operations, optimize technology infrastructure, and ensure data security for organizations. Development & IT professionals play a crucial role in leveraging technology for business growth and innovation.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Design & Creative</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste aliquid eos
                                    consequatur rem labore tempore non expedita, obcaecati quam possimus sint facere,
                                    aspernatur vero fugiat amet corrupti omnis? Commodi!</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Sales & Marketing</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste aliquid eos
                                    consequatur rem labore tempore non expedita, obcaecati quam possimus sint facere,
                                    aspernatur vero fugiat amet corrupti omnis? Commodi!</p>
                            </div>
                        </div>
                    </div>
                    <div class="one">
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Writing & Translation</h1>
                                <p>Writing & Translation services encompass professional writing, editing, proofreading, and translation solutions. Expert writers and linguists deliver high-quality content for various purposes, such as articles, blog posts, marketing materials, and document translation. These services ensure accurate communication, linguistic fluency, and compelling storytelling, catering to the diverse writing and translation needs of individuals and businesses.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Photography and Videography</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste aliquid eos
                                    consequatur rem labore tempore non expedita, obcaecati quam possimus sint facere,
                                    aspernatur vero fugiat amet corrupti omnis? Commodi!</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon"></div>
                            <div class="text">
                                <h1>Virtual Assistance</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste aliquid eos
                                    consequatur rem labore tempore non expedita, obcaecati quam possimus sint facere,
                                    aspernatur vero fugiat amet corrupti omnis? Commodi!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingCat;