<template>
    <div class="docs">
        <div class="container">
            <div class="row">
                <div class="btn_block">
                    <div class="single-btn" @click="tabHandler('qwe')">
                        {{ $t('docs.theCharter')}}
                    </div>
                    <div class="single-btn" style="" @click="tabHandler('docs')">
                        {{ $t('docs.codex')}}
                    </div>
                    <div class="single-btn" style="" @click="tabHandler('ustav')">
                        {{ $t('docs.regulations_header')}}
                    </div>
                    <div ref="chert" class="indicator"></div>
                </div>
                <transition name="fade" appear>
                    <div v-show="show === 'qwe'">
                        <div class="text">
                            <h1> {{ $t('docs.theCharter')}}</h1>
                            <p>{{$t('docs.text.theCharterAbout.text1')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text2')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text3')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text4')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text5')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text6')}}</p>
                            <p>{{$t('docs.text.theCharterAbout.text7')}}</p>
                                <br>
                            <ul>
                                <li>{{$t('docs.text.theCharterAbout.list1')}}
                                </li>
                                <li>{{$t('docs.text.theCharterAbout.list2')}}
                                </li>
                                <li>{{$t('docs.text.theCharterAbout.list3')}}
                                </li>
                                <li> {{$t('docs.text.theCharterAbout.list4')}}
                                </li>
                                <li>{{$t('docs.text.theCharterAbout.list5')}}
                                </li>
                                <li>{{$t('docs.text.theCharterAbout.list6')}}
                                </li>
                                <li>{{$t('docs.text.theCharterAbout.list7')}}
                                </li>
                            </ul>
                            <p>{{$t('docs.text.theCharterAbout.text8')}}</p>
                            <p class="text_h">{{$t('docs.text.theCharterAbout.text9')}}</p>
                            <ul>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list8')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list9')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list10')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list11')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list12')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list13')}}
                                </li>
                            </ul>
                            <p></p>
                            <p class="text_h">{{$t('docs.text.theCharterAbout.text10')}}</p>
                            <ul>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list14')}}
                                </li>
                                <li> {{$t('docs.text.theCharterAbout.list15')}}
                                </li>
                                <li> {{$t('docs.text.theCharterAbout.list16')}}
                                </li>
                                <li> {{$t('docs.text.theCharterAbout.list17')}}
                                </li>
                                <li> {{$t('docs.text.theCharterAbout.list17')}}</li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list18')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list19')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list20')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list21')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list22')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list23')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list24')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list25')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list26')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list27')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list28')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list29')}}
                                </li>
                                <li>        {{$t('docs.text.theCharterAbout.list30')}}
                                </li>
                            </ul>
                            <p> {{$t('docs.text.theCharterAbout.text11')}}</p>
                            <br>
                            <p style="font-weight: bold"> {{$t('docs.text.theCharterAbout.text12')}}</p>
                            <br>
                            <ul>

                                <li>       {{$t('docs.text.theCharterAbout.list31')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list32')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list33')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list34')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list35')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list36')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list37')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list38')}}
                                </li>
                                <li>       {{$t('docs.text.theCharterAbout.list39')}}</li>
                            </ul>
                            <p class="text_h">{{$t('docs.text.theCharterAbout.text13')}}</p>
                            <ul>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list40')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list41')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list42')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list43')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list44')}}
                                </li>
                                <li>
                                    {{$t('docs.text.theCharterAbout.list45')}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>

                <transition name="fade" appear>
                    <div v-show="show === 'docs'">
                        <div class="text">
                            <h1> {{ $t('docs.codex')}}</h1>
                            <p> {{$t('docs.Codex.Text.text1')}}</p>
                            <p class="text_h">{{$t('docs.Codex.Text.text2')}}</p>
                            <p>{{$t('docs.Codex.Text.text3')}}</p>
                            <p class="text_h">{{$t('docs.Codex.Text.text4')}}</p>
                            <ul>
                                <li>{{$t('docs.Codex.Text.list1')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list2')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list3')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list4')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list5')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list6')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list7')}}
                                </li>
                            </ul>
                            <p class="text_h">{{$t('docs.Codex.Text.text5')}}</p>
                            <ul>
                                <li>{{$t('docs.Codex.Text.list8')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list9')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list10')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list11')}}
                                </li>
                            </ul>
                            <p class="text_h">{{$t('docs.Codex.Text.text6')}}</p>
                            <ul>
                                <li>{{$t('docs.Codex.Text.list12')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list13')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list14')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list15')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list16')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list17')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list18')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list19')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list20')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list21')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list22')}}
                                </li>
                                <li>{{$t('docs.Codex.Text.list23')}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>

                <transition name="fade" appear>
                    <div v-show="show === 'ustav'">
                        <div class="text">
                            <h1> {{ $t('docs.regulations_header')}}</h1>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text1')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text2')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text3')}}</p>
                            <p class="text_h">&nbsp;{{ $t('docs.Regulations.text.text4')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text5')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text6')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text7')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text8')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text9')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text10')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text11')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text12')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text13')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text14')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text15')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text16')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text17')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text18')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text19')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text20')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text21')}} info@oav.uz</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text23')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text24')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text25')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text26')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text27')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text28')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text29')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text30')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text31')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text32')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text33')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text34')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text35')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text36')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text37')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text38')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text39')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text40')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text41')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text42')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text43')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text44')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text45')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text46')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text47')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text48')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text49')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text50')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text51')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text52')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text53')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text54')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text55')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text56')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text57')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text58')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text59')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text60')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text61')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text62')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text63')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text64')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text65')}}</p>
                            <p class="text_h">{{ $t('docs.Regulations.text.text66')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text67')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text68')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text69')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text70')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text71')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text72')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text73')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text74')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text75')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text76')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text77')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text78')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text79')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text80')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text81')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text82')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text83')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text84')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text85')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text86')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text87')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text88')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text89')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text90')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text91')}}</p>
                            <p class="text_h"> {{ $t('docs.Regulations.text.text92')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text93')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text94')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text95')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text96')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text97')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text98')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text99')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text100')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text101')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text102')}}</p>
                            <br>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text103')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text104')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text105')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text106')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text107')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text108')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text109')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text110')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text111')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text112')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text114')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text115')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text116')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text117')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text118')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text119')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text120')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text121')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text122')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text123')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text124')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text125')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text126')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text127')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text128')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text129')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text130')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text131')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text132')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text133')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text134')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text135')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text136')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text137')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text138')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text139')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text140')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text141')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text142')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text143')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text144')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text145')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text146')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text147')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text148')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text149')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text150')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text151')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text152')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text153')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text154')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text154')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text155')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text156')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text157')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text158')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text159')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text160')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text161')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text162')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text163')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text164')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text165')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text166')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text167')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text168')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text169')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text170')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text171')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text172')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text173')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text174')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text175')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text176')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text177')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text178')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text179')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text180')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text181')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text182')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text183')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text184')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text185')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text186')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text187')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text188')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text189')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text190')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text191')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text192')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text193')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text194')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text195')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text196')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text197')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text198')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text199')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text200')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text201')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text202')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text203')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text204')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text205')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text206')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text207')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text208')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text209')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text210')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text211')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text212')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text213')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text214')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text215')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text216')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text217')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text218')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text219')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text220')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text221')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text222')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text223')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text224')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text225')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text226')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text227')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text228')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text229')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text230')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text231')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text232')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text233')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text234')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text235')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text236')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text237')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text238')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text239')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text240')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text241')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text242')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text243')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text244')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text245')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text246')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text247')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text248')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text249')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text250')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text251')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text252')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text253')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text254')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text255')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text256')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text257')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text258')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text259')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text260')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text261')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text262')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text263')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text264')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text265')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text266')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text267')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text268')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text269')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text270')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text271')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text272')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text273')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text274')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text275')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text276')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text277')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text278')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text279')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text280')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text281')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text282')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text283')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text284')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text285')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text286')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text287')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text288')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text289')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text290')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text291')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text292')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text293')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text294')}}</p>
                            <br>
                            <p class="text_h">{{ $t('docs.Regulations.text.text295')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text296')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text297')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text298')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text299')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text300')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text301')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text302')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text303')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text304')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text305')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text306')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text307')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text308')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text309')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text310')}}</p>
                            <p style="text-align: justify;">{{ $t('docs.Regulations.text.text311')}}</p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Docs",
        data() {
            return {
                show: 'qwe',
            }
        },
        mounted() {
            document.title = this.$t("headers.docs")
            this.$watch(
            "$route",
            (newLocale, oldLocale) => {
                console.log(newLocale)
                if (newLocale === oldLocale) {
                return
                }
                document.title = this.$t("headers.docs")
            },
            )
        },
        methods: {
            tabHandler(param) {
                this.show = param
                this.offset = 0
                switch (param) {
                    case 'qwe':
                        this.offset = 0
                        break;
                    case 'docs':
                        this.offset = 140
                        break;
                    case 'ustav':
                        this.offset = 280
                        break;
                }
                this.$refs.chert.style.left = `${this.offset}px`
            }

        },

    }
</script>

<style scoped>
    .container {
        width: 1200px;
        margin-right: auto;
        margin-left: auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;

        text-align: left;
    }

    .btn_block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex-direction: row;
        height: 50px;
        margin: 36px 0;
        position: relative;
    }

    .indicator {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 140px;
        background-color: #4493ff;
        height: 3px;
        transition: all 0.2s ease-in;
    }

    .single-btn {
        cursor: pointer;
        width: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        transition: all 0.2s ease-in-out;
        font-size: 18px;
        font-weight: 500;
    }

    .single-btn:hover {
        background-color: #4493ff;
        color: #fff;
    }

    .btn:hover {
        background-color: #4493ff;
        color: white;
    }

    .hidden {
        display: none;
    }

    .text {
        padding: 0;
    }

    .text h1 {
        font-size: 30px;
        margin-bottom: 15px;

    }

    .text p {
        font-size: 20px;
    }

    .text ul {
        margin-bottom: 20px;
    }

    .text_h {
        font-weight: bold;
        margin: 25px 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.4s ease-in !important;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    @media screen and (max-width: 1200px) {
        .container {
            width: 991px;
            margin-right: auto;
            margin-left: auto;
        }

        .btn_block {
            margin: 0 20px;

        }
        .text ul {
            padding: 20px;
        }

        .text h1 {
            padding: 20px 20px;
        }

        .text p {
            padding: 20px 20px;
        }
    }

    @media screen and (max-width: 991px) {
        .container {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }
    }

    @media screen and (max-width: 768px) {
        .btn_block {
            width: 100%;
        }

        .single-btn {
            width: 100%;
            margin-top: 15px;
            border: 1px solid #2d66b3;
            border-radius: 7px;
            margin-right: 5px;
        }
        .indicator{
            display: none;
        }
    }
</style>