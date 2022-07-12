import React from 'react';

import {TicTacToe} from "./game";

//
import glitch_ready_to_play from "../../assets/img/glitch_ready_to_play.png";
import glitch_11 from "../../assets/img/glitch_11.png";

import crystal_11 from "../../assets/img/crystal_11.png";
import crystal_12 from "../../assets/img/crystal_12.png";

import './index.scss';

function TTT() {
    return (
        <article className="w-full flex justify-center">
            <section className="w-2/3">
                <h1 className="w-full relative font-bold uppercase
                    text-[100px] leading-[90px] xl:text-[75px] xl:leading-[75px] lg:text-[60px] lg:leading-[60px]
            ">
                    TIC-TAC-TOE
                    <img src={glitch_ready_to_play} alt="glitch_ready_to_play" className="absolute bottom-[-32px] left-[-24px]"/>
                </h1>
                {/*<article className="w-full mt-[93px] pl-[4vw] pt-[22px] pb-[48px]  mr-[-90px] border-b border-pwc-black">*/}
                {/*    <p className="w-full flex justify-between">*/}
                {/*        <span className="text-[36px] leading-[40px]">Balance</span>*/}
                {/*        <span className="text-[36px] leading-[40px] font-bold uppercase">30 ETH</span>*/}
                {/*    </p>*/}
                {/*    <button className="w-[50%] h-[70px] mt-[48px] rounded-[50px] uppercase text-white bg-pwc-black*/}
                {/*                text-[24px] xxl:text-[22px] xxl:leading-[22px]  xl:text-[18px] xl:leading-[18px] lg:text-[15px] lg:leading-[15px]*/}
                {/*    ">top up your balance</button>*/}
                {/*</article>*/}
                <article className="w-full mt-[80px] ">
                    <section className="relative w-full h-[700px] rounded-[40px] sm:top-[20px] sm:h-[570px] sm:rounded-[30px] sm:min-w-[360px] sm:overflow-hidden">
                        {/*<img src={crystal_10} alt="crystal_10" className="h-full  sm:absolute sm:rounded-[30px] sm:h-full sm:w-auto sm:left-[-50%] sm:max-w-none"/>*/}
                        <div id="just-opacity-block" className="hidden absolute bg-pwc-black opacity-80 w-full h-full top-0 rounded-[40px] sm:rounded-[30px]"></div>
                        <div id="just-not-opacity-block" className=" absolute bg-pwc-black w-full h-full top-0 rounded-[40px] sm:rounded-[30px]"></div>
                        <div className="w-full relative flex flex-col items-center h-full justify-around">
                            <div className="w-full relative flex justify-between top-[0px] px-[3vw] sm:top-[38px] sm:px-[38px]">
                                <article className="relative w-[40%] max-w-[445px] pr-[10px] flex items-center justify-between sm:w-full">
                                    <section className="w-[70%]">
                                        <p className="text-white text-left font-bold w-[70%] uppercase sm:w-[110px] sm:text-[14px] sm:leading-[16px]
                                         text-[36px] leading-[45px] xxl:text-[30px] xxl:leading-[34px] xl:text-[26px] xl:leading-[28px] lg:text-[20px] lg:leading-[22px]
                                ">
                                            you 30eth
                                            <span className="ml-[20px] text-white font-normal text-[14px] leading-[30px] uppercase
                                                sm:text-[12px] sm:leading-[12px]
                                                text-[14px] leading-[30px] xxl:text-[13px] xxl:leading-[28px] xl:text-[12px] xl:leading-[26px] lg:text-[10px] lg:leading-[22px]
                                    ">balance</span>
                                        </p>
                                    </section>
                                    <img src={glitch_11} alt="glitch_11" className="absolute h-[40%] top-[10px] left-[-12px] sm:h-[40px]"/>
                                    <div className="relative w-[30%] h-[7vw] max-h-[96px] max-w-[96px]  rounded-full bg-pwc-blue sm:hidden">
                                        <img src={crystal_11} alt="crystal_11" className="relative mx-auto bottom-[10%] h-full w-full max-w-[100px] z-10 sm:hidden"/>
                                    </div>
                                </article>
                                <article className="relative w-[40%] max-w-[445px] pl-[10px] flex items-center justify-between ">
                                    <section className=" w-[70%]">
                                        <p className="text-white text-left font-bold uppercase sm:w-[110px] sm:text-[14px] sm:leading-[16px]
                                         text-[36px] leading-[45px] xxl:text-[30px] xxl:leading-[34px] xl:text-[26px] xl:leading-[28px] lg:text-[20px] lg:leading-[22px]
                                ">
                                            player 2 6eth
                                            <span className="ml-[20px] text-white font-normal text-[14px] leading-[30px] uppercase
                                                sm:text-[12px] sm:leading-[12px]
                                                text-[14px] leading-[30px] xxl:text-[13px] xxl:leading-[28px] xl:text-[12px] xl:leading-[26px] lg:text-[10px] lg:leading-[22px]
                                    ">balance</span>
                                        </p>
                                    </section>
                                    <img src={glitch_11} alt="glitch_11" className="absolute h-[40%]  top-[10px] left-[0px] sm:h-[40px]"/>
                                    <div className="relative w-[30%] h-[7vw] max-h-[96px] max-w-[96px]  rounded-full bg-pwc-blue sm:hidden">
                                        <img src={crystal_12} alt="crystal_12" className="relative mx-auto h-full bottom-[10%] z-10 sm:hidden"/>
                                    </div>
                                    {/*<div className="relative w-[9vw] h-[9vw] max-h-[96px] max-w-[96px] rounded-full bg-pwc-blue sm:hidden">*/}
                                    {/*    <img src={crystal_12} alt="crystal_12" className="relative mx-auto bottom-[10%] z-10 sm:hidden"/>*/}
                                    {/*</div>*/}
                                    {/*<section>*/}
                                    {/*    <p className="right-0 text-white font-bold w-[50%] text-[36px] leading-[45px] uppercase sm:w-[110px]*/}
                                    {/*             text-[36px] leading-[45px] xxl:text-[30px] xxl:leading-[34px] xl:text-[26px] xl:leading-[28px] lg:text-[20px] lg:leading-[22px]*/}
                                    {/*            sm:text-[14px] sm:leading-[16px]*/}
                                    {/*    ">*/}
                                    {/*        player 2 6eth*/}
                                    {/*        <span className="ml-[20px] text-white font-normal text-[14px] leading-[30px] uppercase sm:text-[12px] sm:leading-[12px]">balance</span>*/}
                                    {/*    </p>*/}
                                    {/*</section>*/}
                                    {/*/!*<img src={glitch_11} alt="glitch_11" className="absolute top-[-4px] right-[12px] sm:h-[40px] sm:right-[-10px]"/>*!/*/}

                                </article>
                            </div>
                            <TicTacToe/>
                            {/*<div className="relative  top-[140px] w-full flex justify-between px-[40px] sm:top-[93px] sm:px-[20px]">*/}
                            {/*    <img src={scissors} alt="scissors" className="w-[285px] sm:w-1/3"/>*/}
                            {/*    <img src={rock} alt="rock" className="w-[285px] sm:w-1/3"/>*/}
                            {/*    <img src={paper} alt="paper" className="w-[285px] sm:w-1/3"/>*/}
                            {/*</div>*/}
                            {/*<p className="absolute w-[662px] left-[50px] bottom-[42px] text-white font-bold text-[36px] leading-[40px] uppercase sm:w-[318px] sm:left-[28px] sm:bottom-[42px] sm:text-[24px] sm:leading-[30px] ">*/}
                            {/*    Rock paper scissors - the first game. Play and win ETH from your opponent*/}
                            {/*</p>*/}
                        </div>
                       </section>
                </article>
            </section>
        </article>
    );
}

export default TTT;
