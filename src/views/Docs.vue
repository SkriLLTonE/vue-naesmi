<template>
    <div class="docs">
        <div class="container">
            <div class="row">
                <div class="btn_block">
                    <div class="single-btn" @click="tabHandler('qwe')">
                        Xartiya
                    </div>
                    <div class="single-btn" style="" @click="tabHandler('docs')">
                        Kodeks
                    </div>
                    <div class="single-btn" style="" @click="tabHandler('ustav')">
                        Ustav
                    </div>
                    <div ref="chert" class="indicator"></div>
                </div>
                <transition name="fade" appear>
                    <div v-show="show === 'qwe'">
                        <div class="text">
                            <h1>Хаrtiya</h1>
                            <p>Biz, ko’ngilli tаrzdа O’zbеkistоn Nоdаvlаt Elеktrоn Оmmаviy Ахbоrоt Vоsitаlаri Milliy
                                Аssоtsiаtsiyasini (O’zEОАVMА) tuzgаn O’zbеkistоn nоdаvlаt tеlеrаdiоuzаtuvchilаri:</p>
                            <p>fuqаrоlik jаmiyatini bаrpо etishdа milliy elеktrоn оmmаviy ахbоrоt vоsitаlаri rоlini
                                kеngаytirish, shuningdеk, O’zbеkistоn Rеspublikаsidа оmmаviy ахbоrоt vоsitаlаrining
                                zаmоnаviy bоzоrini yarаtishni hаmkоrligimizning bоsh strаtеgiyasi dеb e’lоn qilgаn
                                hоldа;</p>
                            <p>bоzоr iqtisоdiyotigа аsоslаngаn erkin dеmоkrаtik huquqiy dаvlаtni bаrpо etishdа
                                jаmiyatning
                                turli qаtlаmlаrini ахbоrоt bilаn tа’minlаsh vа jipslаshtirishdа rаdiо hаmdа
                                tеlеvidеniyеning
                                аhаmiyatini chuqur аnglаgаn hоldа;</p>
                            <p>prоfеssiоnаl burchni bаjаrish nаfаqаt qоnunchilik аsоslаrining tаkоmillаshgаnligigа,
                                bаlki
                                tеlеrаdiоdаsturlаrni оmmаviy tаrzdа tаrqаtishdа kishilаrning ахlоqiy, jismоniy vа ruhiy
                                sаlоmаtligigа ziyon yеtkаzishi mumkin bo’lаdigаn hоlаtlаrning chеgаrаsini bеlgilаb
                                bеruvchi
                                prоfеssiоnаl аxlоq mе’yorlаrigа hаm bоg’liq ekаnini tаn оlgаn hоldа;</p>
                            <p>umuminsоniy qаdriyatlаrgа аsоslаnib, milliy-mаdаniy qаdriyatlаrni аsrаsh vа
                                rivоjlаntirish
                                yo’lidаgi mаs’uliyatimizni аnglаgаn hоldа;</p>
                            <p>"tаrаqqiyot yo’lidаgi xilmа-xillik" tаmоyili ustuvоrligi vа fikrlаr xilmа-xilligigа аmаl
                                qilgаn hоldа,</p>
                            <p>prоfеssiоnаl fаоliyatimizdа quyidаgi tаrtib vа mе’yorlаrgа аmаl qilishni zimmаmizgа
                                оlаmiz:</p>
                            <ul>
                                <li>elеktrоn ОАVning jаmiyat оldidаgi mаjburiyatlаridаn bo’lаk hаr qаndаy mаjburiyatlаr
                                    ulаrgа bo’lgаn ishоnchni susаytirishini аnglаsh;
                                </li>
                                <li>jаmiyat mаnfааtlаri yo’lidа mеhnаt qilish ijtimоiy fikr vа mаdаniyatlаr
                                    xilmа-xilligini
                                    аks ettirish mаjburiyatini nаzаrdа tutishini tаn оlish;
                                </li>
                                <li>fikr vа qаrаshlаrini erkin bаyon etuvchi shаxs yoki ijtimоiy guruh, аvvаlо, munоzаrа
                                    yuritish mеzоnlаrigа riоya etishi, аniq, аsоslаngаn mаqsаdlаrgа egа bo’lishi,
                                    dаsturiy
                                    vаzifаlаrni bаyon qilishgа to’g’ri kеlgаndа uning оqibаtlаri uchun jаvоbgаrlikni
                                    zimmаsigа оlishi lоzimligi tаmоyiligа аmаl qilish;
                                </li>
                                <li>tеlеrаdiоdаsturlаrdа bаyon etilаdigаn fikr vа qаrаshlаr xilmа-xilligi qоnun
                                    tаlаblаrigа,
                                    milliy mаnfааtlаrgа, umuminsоniy qаdriyatlаrgа vа O’zbеkistоn xаlqlаri аxlоqiy
                                    mе’yorlаrigа zid kеlmаsligi lоzimligini esdа tutish;
                                </li>
                                <li>ijtimоiy аhаmiyatgа egа bo’lgаn hаr qаndаy ishlаr оshkоrаligini tа’minlаsh uchun
                                    kurаshish;
                                </li>
                                <li>hаr qаndаy prоfеssiоnаl hаtti-hаrаkаt jаrаyonidа jаmiyat mаnfааtlаri, umuminsоniy
                                    qаdriyatlаr vа insоn huquqlаri mе’yorlаrigа riоya qilish hаmdа yеtuk fuqаrоlik
                                    pоzitsiyasidа turishni tаn оlish;
                                </li>
                                <li>vijdоniylik, tаrbiyalilik, shахs g’ururi vа qаdr-qimmаtini hurmаt qilgаn hоldа,
                                    umumiy
                                    qаbul qilingаn ахlоqiy mе’yorlаrni rivоjlаntirish;
                                </li>
                            </ul>
                            <p>Mаzkur Xаrtiya nuqtаi nаzаridаn jаmiyаt mаnfааtlаri dеgаndа, kоnstitutsiyaviy tuzum
                                аsоslаrini himоya qilish, dаvlаt xаvfsizligigа qaratilgan tаhdidlаrning оldini оlish,
                                jinоyatni fоsh etish, jаmiyat sаlоmаtligi vа аhоli xаvfsizligini himоya qilish, shаxs
                                yoki
                                birоr tаshkilоt tоmоnidаn аmаlgа оshirilаdigаn hаtti-hаrаkаtlаr, hujjаtlаr yoki xаbаrlаr
                                yordаmidа jаmiyatni chаlg’itishning оldini оlish zаrurligi tushunilаdi.</p>
                            <p class="text_h">Аuditоriya:</p>
                            <ul>
                                <li>shikоyatlаrni tеrgоv qilish vа zudlik bilаn yo’l qo’yilgаn хаtоlаrni to’g’irlаsh;
                                </li>
                                <li>ijtimоiy аhаmiyatgа egа mа’lumоtlаrni qаsddаn yashirish vа nоto’g’ri mа’lumоtlаrni
                                    tаrqаtishning оldini оlish uchun kishilаrgа fаktlаrni fikrlаrdаn аniq аjrаtgаn hоldа
                                    хоlis ахbоrоtni tаqdim etib, ulаrning hаqiqаtni bilish huquqini hurmаt qilish;
                                </li>
                                <li>kishilаrgа rаdiо vа tеlеvidеniyе оrqаli o’z nuqtаi-nаzаrini erkin ifоdа etish hаmdа
                                    оmmаviy ахbоrоt vоsitаlаridаn fоydаlаnishgа ko’mаklаshgаn hоldа, ulаrning ijtimоiy
                                    fikr
                                    shаkllаnishidа ishtirоk etish huquqini hurmаt qilish;
                                </li>
                                <li>dаsturlаrdа jinоyatlаrning ikir-chikir tаfsilоtlаrigаchа yoritish, g’аyriinsоniy
                                    tuyg’ulаrni qo’zg’аsh, zo’rаvоnlik, shаfqаtsizlik, shuningdеk, milliy, diniy, irqiy
                                    yoki
                                    аxlоqiy tuyg’ulаrni kаmsituvchi fikr vа mulоhаzаlаrni bаyon etishgа yo’l qo’ymаgаn
                                    hоldа, аuditоriyaning ахlоqiy qаdriyatlаri vа mаdаniy аndоzаlаrini hurmаt qilish;
                                </li>
                                <li>tоmоshаbinlаr vа tinglоvchilаr bilаn оchiq muhоsаbаgа ko’mаklаshgаn,
                                    jаmоаtchilikning
                                    ОАV fаоliyatigа bildirаyotgаn hаqqоniy e’tirоzlаrini оmmа оldidа qаbul qilgаn,
                                    tаnqidgа
                                    jаvоb bеrish imkоniyatini bеrgаn, yo’l qo’yilgаn хаtоlаrni tеzkоrlik bilаn
                                    to’g’irlаgаn,
                                    jаmоаtchilik fikrini qаsddаn bоshqаrilishigа yo’l qo’ymаgаn vа uni nоаniq hаmdа
                                    turli
                                    mа’nоli sаrlаvhаlаr bilаn chаlg’itmаgаn hоldа аuditоriyaning ishоnchini
                                    mustаhkаmlаsh;
                                </li>
                                <li>sud muhоkаmаsigа bo’lgаn huquqidаn fоydаlаnish.</li>
                            </ul>
                            <p>Mаzkur Xаrtiya nuqtаi nаzаridаn hаddаn ziyod shаfqаtsizlik vа zo’rаvоnlikni nаmоyish
                                qilish
                                yoki tаsvirlаsh dеgаndа, insоnlаr vа hаyvоnlаrni o’ldirish, jismоniy kuch ishlаtgаn
                                hоldа
                                kishilаr vа hаyvоnlаrni tаhqirlаshni tаsvirlоvchi hujjаtli sаhnаlаrni hаmdа
                                yarаlаnishlаr,
                                jаsаdlаr, qiynоqlаr yoki kаltаk izlаrini bаtаfsil yoritish bilаn bеrilgаn jinоyatlаr,
                                tаbiiy
                                оfаtlаr оqibаtlаri hаqidаgi sаhnаlаrni hаddаn tаshqаri tаbiiy, аsоslаnmаgаn tаrzdа
                                bаtаfsil
                                vа kishilаrni lаrzаgа sоlаdigаn dаrаjаdа ko’rsаtish tushunilаdi.</p>
                            <p class="text_h">Kаsbiy tаmоyillаr:</p>
                            <ul>
                                <li>tаhliliy хаbаrlаrni birоr kimsаning shахsiy хоhishigа emаs, bаlki mutахаssislаrning
                                    fikrlаrigа аsоslаngаn hоldа tаqdim etish;
                                </li>
                                <li>fаktlаr yoki vоqеlikni buzib ko’rsаtuvchi usullаrdаn qоchgаn hоldа, tехnоlоgik
                                    vоsitаlаrdаn mаlаkаli vа оqilоnа fоydаlаnish;
                                </li>
                                <li>fаqаt fаvqulоddа hоlаtlаrdа, ya’ni jаmоаtchilik fаrоvоnligi yoki kishilаr hаyotigа
                                    jiddiy tаhdid хаvf sоlgаndа, yoki jаmiyat uchun muhim аhаmiyatgа egа bo’lgаn lаvhаni
                                    оlishning bоshqа imkоni bo’lmаgаndа yashirin kаmеrаlаr vа mikrоfоnlаr yordаmidа
                                    ахbоrоt
                                    yig’ishning хufiya usullаridаn fоydаlаnish vа bu hаqdа аuditоriyani хаbаrdоr qilish;
                                    ахlоq vа оdоb tаlаblаridаn chеkinmаgаn hоldа, mа’lumоt bеruvchi mаnbаlаr bilаn
                                    ishlаshdа
                                    fаqаt qоnuniy yo’llаrdаn fоydаlаnish;
                                </li>
                                <li>lаvhаdаn mаnfааtdоr bo’lgаn ахbоrоt mаnbаlаrigа pul to’lаmаslik;</li>
                                <li>аgаr mахsus shаrtnоmа bilаn ko’zdа tutilmаgаn bo’lsа, vоqеаgа bеvоsitа yoki
                                    bilvоsitа
                                    аlоqаdоr shахslаrdаn hеch qаndаy hоlаtlаrdа mukоfоt pulini оlmаslik;
                                </li>
                                <li>ОАVning erkinligigа putur yеtkаzаdigаn fаоliyat bilаn shug’ullаnmаslik;</li>
                                <li>ахbоrоtni "sоtib оlish" yoki uning mаzmunigа siyosiy tаyziq o’tkаzishgа hаmdа
                                    ахbоrоt
                                    yig’ish yoki uni tаrqаtish bilаn shug’ullаnuvchi shахslаrni qo’rqitishgа urinаdigаn
                                    shахslаr bilаn аlоqаdаn o’zini tiyish;
                                </li>
                                <li>ахbоrоt mаzmunini tаshqi tаyziq аsоsidа emаs, bаlki fаqаt fаktlаr vа vоqеаlаr
                                    аsоsidа
                                    bеlgilаsh;
                                </li>
                                <li>ахbоrоtgа hоmiylik qilish ushbu ахbоrоtning mаzmunigа аrаlаshish yoki uni o’z
                                    хоhishigа
                                    ko’rа o’zgаrtirish huquqini bеrmаsligini tаn оlish;
                                </li>
                                <li>bаrchа hоlаtlаrdа bеоdоblik, tаyziq, shаntаjgа erk bеrmаgаn hоldа jismоniy vа
                                    yuridik
                                    shахslаrning ахbоrоt tаqdim etishdаn bоsh tоrtish huquqini hurmаt qilish, ахbоrоt
                                    tаqdim
                                    etish mаjburiyati qоnun bilаn bеlgilаngаn hоlаtlаr bundаn mustаsnо;
                                </li>
                                <li>ОАVdа yoritilаdigаn shахslаr sifаtidа jаmiyat fаrоvоnligigа zid kеlmаydigаn yoki
                                    ulаr
                                    bilаn аlоqа g’аrаzli sifаtidа qаbul qilinmаydigаn kishilаrni tаnlаgаn hоldа
                                    ахbоrоtlаrning хоlisligi hаqidа qаyg’urish;
                                </li>
                                <li>prоfеssiоnаl jurnаlistlik e’tibоrining оbyеktigа аylаngаn kishini, u bilаn muоmаlаdа
                                    оdоb vа ehtirоmni sаqlаgаn hоldа, shахs sifаtidа hurmаt qilish;
                                </li>
                                <li>mаtеriаllаrdа kishini kаmsituvchi so’zlаr vа ishоrаlаr, хususаn, qаhrаmоnning irqi,
                                    millаti, tеrisining rаngi, dini, хаstаliklаri yoki jismоniy kаmchiliklаrigа ishоrа
                                    qiluvchi ibоrаlаrgа; kishining fаmiliyasi, tаshqi ko’rinishini kinоyali so’zlаr
                                    bilаn
                                    kаmsitilishigа vа аgаr sud оrqаli uning jinоyatchi ekаnligi аniqlаnmаgаn bo’lsа, bu
                                    hаqdа gаpirilishigа yo’l qo’ymаslik;
                                </li>
                                <li>elеktrоn хizmаtlаrdаn fоydаlаngаn hоldа оlingаn bаrchа ахbоrоtlаrgа аniqlik vа
                                    hаqqоniylikning eng yuqоri аndоzаlаrini qo’llаsh; birоr bir ахbоrоtdаn fоydаlаngаndа
                                    uning аniq vа hаqqоniy ekаnligigа ishоnch hоsil qilish lоzim;
                                </li>
                                <li>bоlаlаrgа tааlluqli tеlеrаdiоdаsturlаrgа аlоhidа e’tibоr qаrаtish, kаttаlаrgа
                                    qаrаgаndа
                                    ko’prоq bоlаlаrning shахsiy hаyotini himоya qilishni tа’minlаsh.
                                </li>
                            </ul>
                            <p>Mаzkur Xаrtiya nuqtаi nаzаridаn shахsiy hаyot dеgаndа, shахsiy vа оilаviy sirlаr,
                                jumlаdаn
                                nikоh vа intim munоsаbаtlаr, jinsiy оriеntаtsiyasi, diniy dunyoqаrаshlаri, do’stоnа
                                аlоqаlаri, bo’sh vаqtini o’tkаzish usullаri, хаt yozish, tеlеfоn оrqаli gаpirish,
                                pоchtа,
                                tеlеgrаf, kоmpyutеr vа bоshqа yo’llаr bilаn jo’nаtilgаn хаbаrlаr siri tushunilаdi.
                                Mаzkur
                                Xаrtiya nuqtаi nаzаridаn хususiy hudud dеgаndа, yashаsh хоnаsi, uy, hоvli, mеhmоnхоnа
                                nоmеrlаri, pаnsiоnаtlаr, kаsаlхоnа pаlаtаlаri vа bоshqаlаr tushunilаdi.</p>
                            <p style="font-weight: bold">Tаhririyat:</p>
                            <ul>
                                <li>хоdimlаrni аxlоqiy mе’yorlаrgа zid kеlаdigаn ishlаrni bаjаrishgа undоvchi buyruqlаr
                                    yoki
                                    hаrаkаtlаrdаn o’zini tiyish;
                                </li>
                                <li>хоdimlаrning ахlоqqа dоir e’tirоzlаrini diqqаt bilаn eshitish, bundаy muhоkаmаlаr vа
                                    bаhslаr uchun shаrоit yarаtish;
                                </li>
                                <li>hаmkоrlikning ko’ngilli rаvishdа bo’lishigа e’tibоr qаrаtib, "hаmmuаlliflik"dаn
                                    qоchgаn
                                    hаmdа ishоnchni sаbr-tоqаtlik bilаn qоzоngаn hоldа, muаlliflаr bilаn munоsаbаtlаrni
                                    o’zаrо hurmаt аsоsidа qurish;
                                </li>
                                <li>muаllifning o’zigа хоsligini qаdrlаsh, mаtnning nаfаqаt оngimizdа, bаlki didgа mоs
                                    rаvishdа lеksik-stilistik jihаtlаrini o’zgаrtirishgа yo’l qo’ymаsdаn, uning o’zigа
                                    хоsligini sаqlаshgа hаrаkаt qilish;
                                </li>
                                <li>mаtеriаllаrning efirdа jоylаshtirilishi rаd qilingаnidа, muаllifni хаfа qilmаslikkа
                                    vа
                                    uning g’ururigа jаrоhаt yеtkаzmаslikkа hаrаkаt qilgаn hоldа, buni puхtаlik bilаn
                                    аsоslаb
                                    bеrish;
                                </li>
                                <li>jurnаlistikа sоhаsining mаvqеyigа putur yеtkаzuvchi jinоiy jаzоlаnаdigаn
                                    hаrаkаtlаrgа
                                    yo’l qo’ymаgаn hоldа jurnаlist kаsbining nufuzi hаqidа qаyg’urish;
                                </li>
                                <li>tаhririyat jаmоаsi tоmоnidаn qаbul qilingаn o’zаrо ish munоsаbаtlаri mе’yorlаrini
                                    hurmаt
                                    qilish vа bundа tаhririyat jаmоаsi yaхshi fаоliyat ko’rsаtаdigаn intizоm vа ijоdiy
                                    tаshаbbus, rаqоbаt vа o’zаrо yordаmni o’zidа mujаssаm etgаn muhitni yarаtish;
                                </li>
                                <li>tаhririyat jаmоаsidа pоklik vа vijdоniylik munоsаbаtlаrigа, bilimlаr vа mаhоrаtni
                                    оshirishdа, ijоdiy lаyoqаtlаrni rivоjlаntirishdа bir birini tushunish, o’zаrо yordаm
                                    vа
                                    ko’mаkkа аsоslаngаn mа’nаviy muhitni sаqlаsh hаqidа qаyg’urish;
                                </li>
                                <li>jurnаlistning bеrilgаn tоpshiriqni bаjаrishdаn аsоsli tаrzdа bоsh tоrtishgа bo’lgаn
                                    huquqini, аgаr bu uning qаrаshlаri vа tаmоyillаrigа zid kеlаdigаn bo’lsа, hurmаt
                                    qilish;
                                </li>
                                <li>jurnаlistlаr оrаsidаgi kоrrupsiyagа qаrshi turish;</li>
                            </ul>
                            <p class="text_h">Hоkimiyat</p>
                            <ul>
                                <li>hоkimiyatgа jаmiyatni bоshqаruvchi muhim ijtimоiy institut sifаtidа hurmаt
                                    ko’rsаtish;
                                </li>
                                <li>bоshqаruv оrgаnlаri vа хаlq o’rtаsidа bеvоsitа аlоqаni аmаlgа оshirgаn hоldа,
                                    hukumаt
                                    tuzilmаlаrigа ulаrning vаzifаlаri bаjаrilishini ахbоrоt ko’mаgi bilаn tа’minlаsh;
                                </li>
                                <li>jurnаlistikаning hоkimiyatdаn mustаqil bo’lish huquqigа jаmiyatning hukumаt
                                    tuzilmаlаri
                                    fаоliyatini, shu jumlаdаn dаvlаt оrgаnlаri хulqini nаzоrаt qilishning muhim shаrti
                                    sifаtidа qаrаgаn hоldа, ushbu huquq uchun kurаshish;
                                </li>
                                <li>jаmоаtchilikning hukumаt tuzilmаlаri fаоliyati hаqidаgi ахbоrоtni оlishgа bo’lgаn
                                    huquqi
                                    uchun kurаshish vа bundаy ахbоrоtning kоnstruktiv tаnqid uchun оchiq bo’lishigа
                                    ko’mаklаshish;
                                </li>
                                <li>jаmоаtchilik bоshqаruvi tizimini tаkоmillаshtirishgа hаrаkаt qilgаn hоldа, hukumаt
                                    tuzilmаlаrining ijtimоiy vа хususiy sеktоrlаridа fаоliyat yurituvchi shахslаrning
                                    o’z
                                    vаzifаlаrini suistе’mоl qilish vа ishigа sоvuqqоnlik bilаn qаrаsh hоlаtlаrini fоsh
                                    etish;
                                </li>
                                <li>siyosаtdа ishtirоk etuvchi shахslаr yoki yuqоri mаrtаbаli аmаldоrlаr o’z shахsiy
                                    hаyotlаrini himоya qilish bоrаsidа tеng huquqlаrgа egа ekаnliklаrini tаn оlish.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>

                <transition name="fade" appear>
                    <div v-show="show === 'docs'">
                        <div class="text">
                            <h1>Kodeks</h1>
                            <p>O’ZBEKISTON ELEKTRON OMMAVIY AXBOROT VOSITALARI PROFESSIONAL JURNALISTINING ODOB-AXLOQ
                                KODEKSI</p>
                            <p class="text_h">Kirish</p>
                            <p>O’zbekistondagi EOAVning professional jurnalisti - bu avvalo, jamiyat oldida o’zining
                                professional burchini to’laqonli anglovchi va mentalitetni, o’zbek xalqi tarixi va
                                an’analarini tan oladigan va uni o’rganadigan, umuminsoniy qadriyatlarni
                                rivojlantirishga
                                intiladigan, tinchlik, demokratik rivojlanish va taraqqiyotga faol zamin hozirlaydigan,
                                O’zbekiston Respublikasi qonunlariga amal qiladigan, jamiyatning faol ilgarilashiga
                                to’sqinlik qiluvchi sabablarni tahlil qiluvchi va ochib tashlovchi, o’z xalqi dardi
                                bilan
                                yashovchi kishidir.</p>
                            <p class="text_h">Jurnalist o’z vazifalarini bajarishda quyidagilarga rioya etishi
                                kerak:</p>
                            <ul>
                                <li>obyektiv voqelikni haqqoniy ifodalash orqali odamlarning to’g’ri va ishonchli
                                    ma’lumot
                                    olishi kafolatini berishi shart;
                                </li>
                                <li>umumiy qabul qilingan odob-axloq me’yorlariga, shuningdek, o’zaro munosabatlar
                                    madaniyatining standartlariga rioya etish, odamlarga nisbatan insoniylik va
                                    oliyjanoblilik ko’rsatish, adolatli bo’lib, uning sha’nini hurmat qilish;
                                </li>
                                <li>insonning qadri-qimmati va uning shaxsiy hayotga huquqini hurmat qilish, xalqaro
                                    huquq
                                    talablari va milliy qonunlarga muvofiq uning huquqlarini va obro’sini haqorat,
                                    tuhmat,
                                    yolg’on ayblovlardan himoya qilish;
                                </li>
                                <li>ommaviy axborot vositalaridan jamiyat manfaatlariga, shaxsning huquqlari va qonuniy
                                    manfaatlariga zid ravishda foydalanishga yo’l qo’ymaslik, shuningdek urush va
                                    zo’ravonlikni, milliy, ijtimoiy va diniy murosasizlik, millatlararo nizolarni,
                                    shafqatsizlikni targ’ibot qilish, pornografiyani tarqatish hamda jamoatchilik
                                    fikriga
                                    ta’sir o’tkazish va so’z erkinligining monopolizatsiyaga yo’l qo’ymaslikni yodda
                                    tutish;
                                </li>
                                <li>jamiyat manfaatlari borasidagi ishlar jamiyatning va fikrlarning turlicha ekanligini
                                    e’tirof etish va shu bilan birga muammo va voqealarni yoritishda juda ham sodda
                                    yondashuvga yo’l qo’ymaslik;
                                </li>
                                <li>fitna, ig’voning har qanday shaklidan yoki tajovuz, urush, qurollanish, zo’ravonlik,
                                    shafqatsizlik, kamsitishning har qanday ko’rinishini oqlashdan o’zini tuta bilish;
                                </li>
                                <li>O’zbek xalqi an’analarni saqlash va rivojlantirish uchun o’z javobgarligini his
                                    etish
                                </li>
                            </ul>
                            <p class="text_h">Professional jurnalist quyidagilarga yo’l qo’ymasligi kerak:</p>
                            <ul>
                                <li>axborot olish maqsadida yolg’on, qo’rqitish, provokatsiya yoki odob-axloq va huquq
                                    me’yorlariga zid bo’lgan boshqa usullarni qo’llash;
                                </li>
                                <li>o’z mavqeidan ma’lum bir foyda ko’rish maqsadida foydalanmaslik, shuningdek begona
                                    shaxs
                                    yoki ommaviy axborot vositasi bo’lmagan boshqa tashkilotning foydasiga axborot
                                    to’plamaslik;
                                </li>
                                <li>jinoiy shaxslarning himoyachisi bo’lib chiqish, ekstremistik, terroristik,
                                    millatchilik
                                    tashkilotlar va guruhlarning manfaatlarini ma’lumotni ularga qulay tarzda yoritish
                                    orqali qo’llab-quvvatlamaslik;
                                </li>
                                <li>plagiat, yashirincha reklama bilan shug’ullanmaslik, ommani chalg’itishga olib
                                    keluvchi
                                    tasvir va ovoz bilan ta’sir ko’rsatish, shuningdek haqiqatga to’g’ri kelmagan
                                    ma’lumotlarni jamoatchilik e’tiboriga taqdim etmaslik.
                                </li>
                            </ul>
                            <p class="text_h">Jurnalistning mahorati quyidagilardan iborat:</p>
                            <ul>
                                <li>barcha professional sa’y-harakatlarni halollik va mulohaza bilan, adolatlilik,
                                    vijdonlilik, intiluvchanlik va jasorat ko’rsatgan holda bajarish;
                                </li>
                                <li>o’quvchilar, tomoshabinlar, tinglovchilarda boshqa xalqlarning ehtiyojlariga
                                    ta’sirchanligini oshirish orqali millatlararo munosabatlar madaniyatini
                                    tarbiyalashga
                                    ko’maklashish, barcha millatlar va insonlarning dini va jinsi, tili va millati,
                                    diniy
                                    qarashlari va e’tiqodidan qat’i nazar ularning huquq va qadr-qimmatlarini hurmat
                                    qilish;
                                </li>
                                <li>bolalarga oid ishlarga alohida e’tibor qaratish hamda ularning kattalarga nisbatan
                                    shaxsiy hayotini har tomonlama himoya qilish;
                                </li>
                                <li>har bir inson uning aybdorligi sud tomonidan tasdiqlanmagunga qadar aybdor emasligi
                                    to’g’risidagi tamoyilga asoslanish;
                                </li>
                                <li>tahliliy ma’lumotlarni shaxsiy yondashuvlari asosida emas, mutaxassislar fikrlariga
                                    asoslangan holda taqdim etish;
                                </li>
                                <li>ma’lumot manbasining maxfiyligini himoya qilish borasida barcha majburiyatlarni
                                    bajarish;
                                </li>
                                <li>ma’lumot mazmuniga siyosiy ta’sir ko’rsatmoqchi bo’lganlarga, shuningdek
                                    axborotlarni
                                    to’plash va tarqatish bilan shug’ullanuvchilarga do’q-po’pisa qilmoqchi bo’lganlarga
                                    qarshi turish;
                                </li>
                                <li>odamlarning ommaviy axborot vositalariga ishonchini mustahkamlash, ya’ni
                                    o’quvchilar,
                                    tomoshabinlar va tinglovchilar bilan ochiq muloqot olib borish, o’z faoliyatiga
                                    jamoatchilik tomonidan bildirilayotgan haqqoniy da’volarini omma oldida to’g’ri
                                    qabul
                                    qilish, muayyan xatolarni tezkorlik bilan bartaraf etgan holda tanqidga javob berish
                                    imkoniyatini yaratish, ma’lumot oluvchilarning ongiga qasddan ta’sir ko’rsatishni va
                                    noaniq, ikki ma’noli sarlavhalar orqali ularni noto’g’ri yo’naltirishga yo’l
                                    qo’ymaslik;
                                </li>
                                <li>odobsizlik, do’q-po’pisaga yo’l qo’ymagan holda jismoniy va yuridik shaxslarning
                                    ma’lumot bermaslik huquqini hurmat qilish, faqat ma’lumot berish qonuniy ravishda
                                    majburiy bo’lgan holatlar bundan mustasno;
                                </li>
                                <li>jurnalistik hamkorlikning manfaatlari va maqsadlarining umumiyligini hurmat qilish,
                                    bu
                                    borada jamiyatda barqarorlik va ishonchlilikning sharti sifatida professional
                                    birdamlikka rioya qilish;
                                </li>
                                <li>jamiyat hayotini boshqarishni amalga oshiruvchi hokimiyatni muhim ijtimoiy
                                    organizmni
                                    boshqarish uchun mo’ljallangan institut sifatida hurmat qilish;
                                </li>
                                <li>elektron xizmatlardan foydalanishda barcha ma’lumotlarning aniqligi va
                                    haqqoniyligining
                                    yuqori standartlarini qo’llash, har qanday ma’lumotdan foydalanganda uning aniqligi
                                    va
                                    to’g’riligi haqida ishonch hosil qilish;
                                </li>
                                <li>axborot va kommunikatsiya sohasida xalqaro munosabatlar jarayoniga, ayniqsa xalqlar
                                    va
                                    davlatlar o’rtasida tinchlik va do’stona munosabatlarni mustahkamlashga
                                    ko’maklashish;
                                </li>
                                <li>har qanday intilish va sa’y-harakatlarda O’zbekiston Respublikasi va uning
                                    fuqarolari
                                    manfaatlarining ustuvor ekanligini his etish.
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>

                <transition name="fade" appear>
                    <div v-show="show === 'ustav'">
                        <div class="text">
                            <h1>Ustav</h1>
                            <p style="text-align: justify;">O'zbekiston Respublikasi Adliya vazirligi tomonidan 2016
                                yil «30» sentabrda «QAYTA RO'YXATGA OLINGAN»</p>
                            <p style="text-align: justify;">O'zbekiston elektron ommaviy axborot vositalari milliy
                                assotsiatsiyasi a'zolarining 2015 yil «11» maydagi Umumiy yig'ilishi qarori bilan
                                «TASDIQLANGAN»</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">O'ZBEKISTON ELEKTRON OMMAVIY
                                AXBOROT VOSITALARI MILLIY ASSOTSIATSIYASINING U S T A V I </p>
                            <p class="text_h">&nbsp;1. UMUMIY QOIDALAR</p>
                            <p style="text-align: justify;">1.1. O'zbekiston elektron ommaviy axborot vositalari
                                milliy assotsiatsiyasi (keyingi o'rinlarda “Assotsiatsiya” yoki
                                “<strong>O'zEOAVMA</strong>” deb yuritiladi) O'zbekiston Respublikasining
                                Konstitutsiyasi, O'zbekiston Respublikasining qonun hujjatlari, ta'sis shartnomasi
                                hamda mazkur Ustavga muvofiq faoliyat ko'rsatadi.</p>
                            <p style="text-align: justify;">1.2. Assotsiatsiya O'zbekiston Respublikasida Ommaviy
                                axborot vositalari (keyingi o'rinlarda OAV deb yuritiladi) sohasidagi demokratik
                                islohotlarni yanada chuqurlashtirishni ta'minlash, zamonaviy tele-radio industriya
                                bozorini hamda axborot maydonida sog'lom raqobat tamoyillarini rivojlantirish,
                                tele-radiostudiyalarning faoliyat yuritishi uchun hamda teleindustriyaning
                                istiqbolli yangi tarmoqlarini tashkil qilish uchun zarur shart-sharoitlarni
                                yaratish, teleradioeshittirishlar sohasini mustaqil industriya sifatida tashkil
                                etish, teleradiodasturlarni uzatish borasida mobil va raqamli televideniye kabi
                                ilg'or zamonaviy texnologiyalarni joriy etish, fuqarolik jamiyatini qurishda OAVning
                                rolini kengaytirishni strategik maqsadi sifatida belgilab olgan, o'zlarining
                                faoliyatlarini muvofiqlashtirish, shuningdek mushtarak mulkiy manfaatlarini ifoda
                                etish hamda himoya qilish uchun tuzilgan yuridik shaxslarning birlashmasidir.</p>
                            <p style="text-align: justify;">1.3. Assotsiatsiya o'z faoliyatini O'zbekiston
                                Respublikasi hududida amalga oshiradi va Respublika ahamiyatiga ega bo'lgan yuridik
                                shaxslar birlashmasi maqomiga ega.</p>
                            <p style="text-align: justify;">1.4. Assotsiatsiyaning nomi:</p>
                            <p style="text-align: justify;">a) davlat tilida:</p>
                            <p style="text-align: justify;">- to'liq nomi: «O’ZBEKISTON ELEKTRON OMMAVIY AXBOROT
                                VOSITALARI MILLIY ASSOTSIATSIYASI» (O'ZBEKISTON ELEKTRON OMMAVIY AXBOROT VOSITALARI
                                MILLIY ASSOTSIATSIYASI);</p>
                            <p style="text-align: justify;">- qisqacha nomi: O’zEOAVMA (O'zEOAVMA);</p>
                            <p style="text-align: justify;">b) rus tilida:</p>
                            <p style="text-align: justify;">- to'liq nomi: «NATSIONALNAYA ASSOTSIATSIYA ELEKTRONNЫX
                                SREDSTV MASSOVOY INFORMATSII UZBEKISTANA»;</p>
                            <p style="text-align: justify;">- qisqacha nomi: NAESMI;</p>
                            <p style="text-align: justify;">v) ingliz tilida:</p>
                            <p style="text-align: justify;">- to'liq nomi: «THE NATIONAL ASSOCIATION OF ELECTRONIC
                                MASS MEDIA OF UZBEKISTAN»;</p>
                            <p style="text-align: justify;">- qisqacha nomi: NAEMM.</p>
                            <p style="text-align: justify;">1.5. Assotsiatsiyaning faoliyat muddati
                                cheklanmagan.</p>
                            <p style="text-align: justify;">1.6. Assotsiatsiyaning pochta manzili: O'zbekiston
                                Respublikasi, Toshkent shahri, Mirzo Ulug'bek tumani, H.Olimjon maydoni, «Poytaxt»
                                biznes-majmuasi, g'arbiy tomon, 4-yo'lak, 2-qavat.</p>
                            <p style="text-align: justify;">Veb sayt manzili: www. naesmi.uz.</p>
                            <p style="text-align: justify;">E-mail: info@naesmi.uz</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">2. ASSOTSIATSIYANING MAQSADI VA
                                VAZIFALARI</p>
                            <p style="text-align: justify;">2.1. Assotsiatsiya quyidagi maqsadlarda tuzilgan:</p>
                            <p style="text-align: justify;">- turli elektron OAVni yagona tizimga birlashtirish, o'z
                                faoliyatiga doir dasturlarni mustaqil ravishda ishlab chiqish va amalga
                                oshirish;</p>
                            <p style="text-align: justify;">- OAVning zamonaviy bozorini rivojlantirish, elektron
                                OAVni rivojlantirish uchun qulay ijtimoiy va iqtisodiy shart-sharoitlarni
                                yaratish;</p>
                            <p style="text-align: justify;">- tele-radio industriya bozorini rivojlantirish,
                                tele-radiostudiyalarning faoliyat yuritishi uchun zarur shart-sharoit yaratish, bu
                                sohada g'oyalar va dasturlarning ijodiy raqobat muhitini vujudga keltirish bo'yicha
                                aniq chora-tadbirlar majmuini ishlab chiqish va amalga oshirish;</p>
                            <p style="text-align: justify;">- ommaviy axborot vositalarining iqtisodiy erkinligini
                                ta'minlash, axborot maydonida sog'lom raqobat tamoyillarini rivojlantirish;</p>
                            <p style="text-align: justify;">- teleradioeshittirishlar sohasini mustaqil industriya
                                sifatida tashkil etish, teleradiodasturlarni tayyorlash va tarqatish sohasida
                                raqobatni yanada kuchaytirish;</p>
                            <p style="text-align: justify;">- teleradiodasturlarni uzatish borasida mobil va raqamli
                                televideniye kabi ilg'or zamonaviy texnologiyalarni joriy etish, teleindustriyaning
                                istiqbolli yangi tarmoqlarini tashkil qilish uchun zarur sharoitlarni yaratish;</p>
                            <p style="text-align: justify;">- OAVning fuqarolik jamiyatini qurishdagi rolini
                                kengaytirish, so'z va axborot erkinligini yanada rivojlantirish va
                                takomillashtirishga, uning barcha uchun ochiqligi, tezkorligi va ishonchliligini
                                ta'minlashga har tomonlama ko'maklashish;</p>
                            <p style="text-align: justify;">- elektron OAV bozorida sohaning Assotsiatsiyaga a'zo
                                barcha sub'ektlari uchun qulay shart-sharoitlarni ta'minlashga ko'maklashish,
                                Assotsiatsiya a'zolarini o'zaro qo'llab-quvvatlash uchun aloqa tizimini
                                yaratish;</p>
                            <p style="text-align: justify;">- boshqa jismoniy va yuridik shaxslar bilan o'zaro
                                muloqotda Assotsiatsiya a'zolarining umumiy manfaatlari, shu jumladan ularning
                                mulkiy manfaatlarini va huquqlarini ifodalash va himoya qilish;</p>
                            <p style="text-align: justify;">- elektron OAV faoliyati sohasidagi normativ-huquqiy
                                bazani yaratishga yo'naltirilgan normativ-huquqiy hujjatlarni ishlab chiqishda
                                ishtirok etish;</p>
                            <p style="text-align: justify;">- shiddat bilan rivojlanib borayotgan bozor iqtisodiyoti
                                sharoitida Assotsiatsiya a'zolarining ijodiy, texnik, boshqaruv va iqtisodiy
                                salohiyatini oshirishga, elektron OAV tizimlarini boshqarishga jalb etilgan
                                jurnalistlar, menedjerlar, prodyuserlar, muhandis-texnik kadrlar, marketologlarning
                                professional malakasini oshirishga yordam ko'rsatish;</p>
                            <p style="text-align: justify;">- elektron OAVni rivojlantirish uchun xalqaro aloqalarni
                                yanada mustahkamlash va rivojlantirishda qatnashish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining mualliflik va turdosh
                                huquqlarini,</p>
                            <p style="text-align: justify;">qadr-qimmati va ishchanlik obro'sini himoya qilishga
                                ko'maklashish;</p>
                            <p style="text-align: justify;">- yangi elektron OAVning faoliyatiga va kasbiy o'sishiga
                                ko'maklashish;</p>
                            <p style="text-align: justify;">- o'z a'zolarining efirini turli xil format va
                                yo'nalishdagi yuqori sifatli media-mahsulotlar bilan boyitishga ko'maklashish va shu
                                maqsadda turli xil ijodiy loyihalarni amalga oshirish.</p>
                            <p style="text-align: justify;">2.2. Assotsiatsiya o'z maqsadlarini amalga oshirish
                                uchun:</p>
                            <p style="text-align: justify;">- elektron OAVning demokratik tamoyillarini
                                rivojlantirishda yordam ko'rsatadi;</p>
                            <p style="text-align: justify;">- axborot maydonida sog'lom raqobat tamoyillarini
                                rivojlantiradi va elektron media-bozor tarmoqlarining monopollashuviga yo'l
                                qo'ymaslik uchun sharoit yaratadi;</p>
                            <p style="text-align: justify;">- elektron OAV faoliyatini himoya qilishga va
                                takomillashtirishga qaratilgan normativ-huquqiy hujjatlarni ishlab chiqishda
                                qatnashadi, elektron OAV muammolarini yechish bo'yicha Assotsiatsiyaning Ustav
                                faoliyati doirasida davlat hokimiyati va boshqaruvi organlariga takliflar
                                kiritadi;</p>
                            <p style="text-align: justify;">- O'zEOAVMAga a'zo bo'lgan elektron OAV o'rtasida
                                media-kontentlarni tayyorlash, o'zaro almashish bo'yicha tashabbus bilan chiqadi va
                                uni tashkil etadi;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolariga uslubiy va tashkiliy-texnik
                                yordam ko'rsatadi, shuningdek uning xodimlariga maslahat, axborot va boshqa turdagi
                                yordam ko'rsatishni amalga oshiradi, shu jumladan, ularning efirini ijtimoiy
                                ahamiyatga ega media mahsulot bilan boyitish, jurnalistlar va boshqa xodimlarning
                                malakasini oshirish bo'yicha ishlarni tashkil etadi. Assotsiatsiyani va o'z
                                a'zolarini yuqori malakali kadrlar bilan ta'minlash maqsadida ularga chet elda
                                malaka oshirish va treninglarda qatnashish uchun ko'maklashadi;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolari va ularning xodimlarini har
                                tomonlama qo'llab-quvvatlashda yordam ko'rsatadi;</p>
                            <p style="text-align: justify;">- elektron OAV sohasida faoliyat ko'rsatuvchi xalqaro
                                tashkilotlar, xorijiy axborot agentliklari va OAV bilan har tomonlama aloqalarni
                                o'rnatadi;</p>
                            <p style="text-align: justify;">- teleradiodasturlarni va elektron OAVning boshqa
                                mahsulotlarini yaratishga, takomillashtirishga hamda ularni tarqatish tarmoqlarini
                                istiqbolli rivojlantirishga va ekspluatatsiya qilishga qaratilgan tadbirlarini
                                ishlab chiqadi va amalga oshiradi;</p>
                            <p style="text-align: justify;">- samarali litsenziyalash tamoyillarini ishlab chiqish,
                                radiochastotalar spektridan foydalanish va chastotalarni rejalashtirish masalalari
                                hamda media mahsulotlarni shakllantirish va tarqatish bozorlarini rivojlantirishni
                                tartibga solish bo'yicha davlat hokimiyati va boshqaruvi organlariga takliflar
                                kiritadi;</p>
                            <p style="text-align: justify;">- elektron OAVning muammolarini hal etish va ularni
                                rivojlantirish bo'yicha eng dolzarb va istiqbolli takliflarni, loyihalarni tahlil
                                qiladi va ishlab chiqadi, ularni qo'llab-quvvatlaydi, zarur hollarda ularni
                                moliyalashtirish va amalga oshirishda ishtirok etadi;</p>
                            <p style="text-align: justify;">- milliy va xalqaro hamkorlar hamda mutaxassislarni jalb
                                qilgan holda turli konferensiyalar, ta'lim yo'nalishidagi tadbirlar, seminar
                                treninglar, uchrashuvlar, davra suhbatlari va boshqa tadbirlarni tashkil etadi va
                                o'tkazadi;</p>
                            <p style="text-align: justify;">- fan, madaniyat, san'at arboblari, biznes va moliya,
                                davlat hokimiyati, siyosiy partiyalar va boshqa jamoat birlashmalari vakillari bilan
                                uchrashuvlar tashkil etadi hamda o'z vakolatlari doirasida hamkorlikni amalga
                                oshiradi;</p>
                            <p style="text-align: justify;">- o'z chora-tadbirlari, aksiyalari, ijodiy va boshqa
                                loyihalarini ishlab chiqadi va amalga oshiradi, turli media mahsulotlarni
                                tayyorlaydi va ushbu maqsadlar uchun o'z mablag'lari, mahalliy va xorijiy davlat
                                hamda jamoat tashkilotlari va jismoniy shaxslarning mablag'laridan foydalanadi;</p>
                            <p style="text-align: justify;">- Ustavida belgilangan maqsadlarni amalga oshirish uchun
                                qonun hujjatlarida belgilangan tartibda bo'linmalar, filiallar va vakolatxonalarini
                                ta'sis etadi;</p>
                            <p style="text-align: justify;">- mulk huquqi asosida o'z mol-mulkiga egalik qiladi,
                                undan foydalanadi va uni tasarruf etadi;</p>
                            <p style="text-align: justify;">- o'z faoliyati haqida jamoatchilikni xabardor qilish
                                uchun matbuot anjumanlari o'tkazadi, OAV va qonunchilikda ta'qiqlanmagan boshqa
                                vositalar orqali ma'lumotlar berib boradi;</p>
                            <p style="text-align: justify;">- qonun hujjatlarida belgilangan tartibda noshirlik
                                faoliyatini amalga oshiradi, OAV tahririyatlarini ta'sis etadi, onlayn
                                teleradioeshittirishlarni amalga oshiradi;</p>
                            <p style="text-align: justify;">- hamkorlik faoliyati doirasida, ijodiy loyihalarni
                                amalga oshirishda mahalliy va xorijiy hamkorlar haqida filmlar va turli xil
                                media-mahsulotlar yaratadi hamda o'z maqsad va vazifalaridan kelib chiqqan holda,
                                ularga axborot ko'magini amalga oshiradi;</p>
                            <p style="text-align: justify;">- xayriya tadbirlarini va grantlar ta'sis qilish
                                faoliyatini tashkil qiladi va ularda ishtirok etadi;</p>
                            <p style="text-align: justify;">- O'zbekiston Respublikasi hududida teleradio
                                eshittirishlarni tashkil etishda, loyiha doirasida o'zaro almashinuv uchun media
                                mahsulotlar fondini yaratishda qatnashadi, zamonaviy texnologiyalardan foydalanib
                                O'zbekiston Respublikasi hududida teleradio eshittirishlar tayyorlash va
                                tarqatishning yagona tizimini yaratishda yordam beradi;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolariga ularning moddiy-texnik
                                bazasini mustahkamlashda yordam ko'rsatadi, zamonaviy yangi texnologiyalarni joriy
                                etishni har tomonlama rag'batlantiradi;</p>
                            <p style="text-align: justify;">- O'zbekiston Respublikasida va chet elda o'z a'zolari
                                manfaatlarini ifoda etadi;</p>
                            <p style="text-align: justify;">- jahon media, kino va video bozorini o'rganadi, media
                                mahsulotlarni sotib olish va ulardan foydalanishga bo'lgan huquqlarni o'zlashtirish
                                bo'yicha loyihalar ishlab chiqadi, tele-videofilmlar, shuningdek musiqiy va boshqa
                                san'at asarlarini sotib olishda, teleradiodasturlarni retranslyatsiya qilish
                                huquqini olishda, tele-radio-video mahsulotlar, shuningdek, musiqiy va boshqa
                                asarlar yaratishga yordam beradi;</p>
                            <p style="text-align: justify;">- turli mahalliy va xorijiy davlat va jamoat
                                tashkilotlaridan Assotsiatsiya va uning a'zolari uchun subsidiyalar, ijtimoiy
                                buyurtmalar, grantlar olishda ishtirok etadi.</p>
                            <p class="text_h">3. ASSOTSIATSIYANING HUQUQIY MAQOMI</p>
                            <p style="text-align: justify;">3.1. O'zbekiston Respublikasining qonun hujjatlariga
                                muvofiq, Assotsiatsiya tashkiliy-huquqiy shakli jihatidan yuridik shaxslar
                                birlashmasi bo'lib, u mustaqil balansga, banklarda hisob raqamiga va boshqa
                                hisoblar, shu jumladan chet el valyutasidagi hisob raqamiga, o'z nomidagi muhr,
                                shtamp, emblema, tovar belgisiga va boshqa rekvizitlariga ega bo'ladi.</p>
                            <p style="text-align: justify;">3.2. Assotsiatsiya mulkiy va shaxsiy nomulkiy huquqlarga
                                ega bo'lishga, o'z nomidan shartnomalar tuzishga, sudda da'vogar yoki javobgar
                                bo'lishga haqli.</p>
                            <p style="text-align: justify;">3.3. Assotsiatsiya o'z majburiyatlari yuzasidan
                                tasarrufidagi barcha</p>
                            <p style="text-align: justify;">mol-mulki bilan javob beradi. Assotsiatsiyaning mulkiy
                                huquqlari qonun hujjatlariga muvofiq himoya qilinadi.</p>
                            <p style="text-align: justify;">3.4. Assotsiatsiya o'z a'zolarining majburiyatlari uchun
                                javobgar emas. Davlat va uning organlari Assotsiatsiyaning majburiyatlari yuzasidan
                                javobgar bo'lmaydi, xuddi shuningdek Assotsiatsiya ham davlat va uning organlari
                                majburiyatlari bo'yicha javobgar bo'lmaydi.</p>
                            <p style="text-align: justify;">3.5. Assotsiatsiyaning barcha a'zolari o'z
                                mustaqilligini hamda yuridik shaxs maqomini saqlab qoladilar. Assotsiatsiya o'z
                                faoliyatini a'zolar ixtiyoriyligi va teng xuquqligi asosida amalga oshiradi.</p>
                            <p style="text-align: justify;">3.6. Assotsiatsiya ilmiy-tarixiy ahamiyatga ega bo'lgan
                                hujjatlarini qonun hujjatlarida belgilangan tartibda saqlanishini ta'minlaydi.</p>
                            <p style="text-align: justify;">3.7. Assotsiatsiya quyidagi huquqlarga ega:</p>
                            <p style="text-align: justify;">3.7.1. Qonun hujjatlariga muvofiq sho'ba korxonalar,
                                filiallar va vakolatxonalar hamda turli tashkiliy-huquqiy shaklda o'zining boshqa
                                tijorat tuzilmalarini tashkil etish.</p>
                            <p style="text-align: justify;">3.7.2. Boshqa notijorat tashkilotlar va birlashmalar
                                (assotsiatsiya, ittifoqlar) tarkibiga kirish, shuningdek, aksiya yoki korxonalarning
                                ustav fondida ulushlarni sotib olish yo'li bilan faoliyatlarida qatnashish.</p>
                            <p style="text-align: justify;">3.7.3. Qonun bilan belgilangan tartibda kontrakt, mehnat
                                shartnomalarini, ishchi va xizmatchilar bilan kelishuv asosida tuzish.</p>
                            <p style="text-align: justify;">3.7.4. O'z faoliyati maqsadlariga muvofiq tarzda yuridik
                                va jismoniy (shu jumladan xorijiy) shaxslar bilan bitimlar tuzish.</p>
                            <p style="text-align: justify;">3.7.5. O'z faoliyatiga doir masalalar bo'yicha
                                yig'ilishlar, konferensiyalar va boshqa turli tadbirlarni o'tkazish.</p>
                            <p style="text-align: justify;">3.7.6. Qonun hujjatlarida belgilangan tartibda va
                                shartlarda bank kreditlaridan foydalanish, shuningdek, o'z a'zolariga moliyaviy
                                yordam ko'rsatish.</p>
                            <p style="text-align: justify;">3.7.7. Assotsiatsiya faoliyati bilan bog'liq masalalarni
                                amalga oshirish maqsadida maxsus jamg'armalarni tashkil etish.</p>
                            <p style="text-align: justify;">3.7.8. Mahalliy va xorijiy tashkilotlardan subsidiyalar,
                                ijtimoiy buyurtmalar, grantlar olish va ulardan Assotsiatsiyaning Ustavida
                                belgilangan vazifalarni bajarishda foydalanish.</p>
                            <p style="text-align: justify;">3.7.9. Assotsiatsiya faoliyati bilan bog'liq bo'lgan
                                masalalarni hal qilish bo'yicha maxalliy mutaxassislarni chet elga xizmat
                                safarlariga yuborish va xorijiy mutaxassislarni taklif etish.</p>
                            <p style="text-align: justify;">3.7.10. Davlat organlaridan va xo'jalik yuritish
                                tashkilotlaridan o'zining faoliyatiga doir xabar, axborot va ma'lumotlar olish hamda
                                o'z a'zolari e'tiboriga yetkazish.</p>
                            <p style="text-align: justify;">3.8. Assotsiatsiya Ustavda belgilangan maqsadlari va
                                vazifalariga muvofiq, O'zbekiston Respublikasining qonun hujatarida nazada tutilgan
                                boshqa huquqlarni ham amalga oshirishi mumkin.</p>
                            <p style="text-align: justify;">3.9. Assotsiatsiyaning majburiyatlari:</p>
                            <p style="text-align: justify;">3.9.1. O'zbekiston Respublikasining qonun hujjatlari
                                shuningdek, ushbu Ustav va boshqa ta'sis hujjatlari talablariga rioya etish hamda
                                ularning bajarilishini ta'minlash.</p>
                            <p style="text-align: justify;">3.9.2. Zarur hollarda o'z mol-mulki, shu jumladan, pul
                                mablag'laridan foydalanishi haqidagi ma'lumotlarni erkin olish imkoniyatini
                                ta'minlash.</p>
                            <p style="text-align: justify;">3.9.3. Assotsiatsiyaning joriy yildagi daromadlari va
                                xarajatlari smetasini belgilash.</p>
                            <p style="text-align: justify;">3.9.4. Ro'yxatdan o'tkazuvchi, soliq va statistika
                                organlariga o'z faoliyati to'g'risida belgilangan tartibda hisobotlar taqdim
                                etish.</p>
                            <p style="text-align: justify;">3.10. Assotsiatsiya O'zbekiston Respublikasining qonun
                                hujjatlariga muvofiq boshqa majburiyatlarni ham zimmasiga olishi mumkin.</p>
                            <p class="text_h"> 4. ASSOTSIATSIYAGA AZOLIK HAMDA
                                ULARNING HUQUQ VA MAJBURIYATLARI</p>
                            <p style="text-align: justify;">4.1. Assotsiatsiyaga a'zolik O'zbekiston
                                Respublikasining amaldagi qonun hujjatlariga rioya qilgan xolda faqat ixtiyoriylik
                                asosida amalga oshiriladi.</p>
                            <p style="text-align: justify;">4.2. Mustaqil rivojlanayotgan, O'zbekiston Respublikasi
                                hududida qonun hujjatlarida o'rnatilgan tartibda ro'yxatga olingan,
                                Assotsiatsiyaning Ustavini hamda boshqa ichki me'yoriy hujjatlarini tan olib qabul
                                qiladigan, OAV sifatida ro'yxatdan o'tganlik haqidagi guvohnomaga ega bo'lgan, shu
                                shumladan on-layn tizimida Internet tarmog'ida faoliyat olib borayotgan OAV
                                vakillari, a'zolikka kirish badalini to'lagan, belgilangan a'zolik badallarni o'z
                                vaqtida to'laydigan va Assotsiatsiya oldida turgan maqsad va vazifalarni amalga
                                oshirishda o'zining real hissasini qo'shishga tayyor sub'ektlar Assotsiatsiyaga a'zo
                                bo'lishlari mumkin.</p>
                            <p style="text-align: justify;">4.3. Yuridik shaxsning (sub'ektning) yozma arizasi va
                                a'zolikka kirish badalini to'laganligi haqidagi xujjat Assotsiatsiya a'zoligiga
                                qabul qilish uchun asos bo'ladi.</p>
                            <p style="text-align: justify;">4.4. Assotsiatsiya a'zolari quyidagi huquqlarga ega:</p>
                            <p style="text-align: justify;">- o'z rahbarlari yoki boshqa vakil shaxslar orqali
                                o'ziga taqdim</p>
                            <p style="text-align: justify;">etilgan vakolatlar bilan Assotsiatsiya a'zolari Umumiy
                                yig'ilishida hal qiluvchi ovoz huquqi bilan «bir OAV – bir ovoz» tamoyili asosida
                                ishtirok etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning faoliyati ustidan Boshqaruv va
                                nazorat organlariga belgilangan tartibda saylash va saylanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning organlari ishi bo'yicha
                                takliflar va mulohazalar berish, Assotsiatsiya ishchi guruhlari faoliyatida ishtirok
                                etish;</p>
                            <p style="text-align: justify;">- davlat hokimiyati va boshqaruvi, sud organlari va
                                boshqa organlarda o'z masalalari ko'rilishida Assotsiatsiya ko'magidan
                                foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning tuzilmaviy bo'linmalari dasturi
                                va tadbirlarida ishtirok etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya boshqaruvi ruxsati bilan Assotsiatsiya
                                atributlari va ramzlaridan foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya faoliyati haqida zaruriy axborotlarni
                                olish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya tomonidan taqdim etiladigan turli
                                maslahatlar, tavsiyalar, axborotlarni berishni o'z ichiga oladigan xizmatlardan
                                beg'araz foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning moddiy-texnik bazasidan mazkur
                                Ustavga mos holda Boshqaruv raisi qaroriga muvofiq foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya rahbar organlariga uning faoliyati bilan
                                bog'liq har qanday masala yuzasidan murojaat qilish;</p>
                            <p style="text-align: justify;">- a'zolik ixtiyoriylik asosida ekanini hisobga olgan
                                holda, kamida 1 (bir) oy oldin Assotsiatsiyaga tegishli ariza bilan murojaat qilib,
                                undan o'z xohishi bilan chiqish.</p>
                            <p style="text-align: justify;">4.5. Assotsiatsiya a'zolarining majburiyatlari:</p>
                            <p style="text-align: justify;">- Assotsiatsiya Ustaviga va qonun hujjatlariga rioya
                                qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya oldida turgan vazifalarni amalga
                                oshirishda o'zining texnikaviy, intellektual va kadrlar resurslari bilan
                                ko'maklashish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning a'zolarining qonuniy
                                manfaatlariga zarar keltiradigan harakatlarni amalga oshirmaslik;</p>
                            <p style="text-align: justify;">- yillik a'zolik badallarini o'z vaqtida to'lab
                                borish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining Umumiy yig'ilishi va
                                Assotsiatsiya Boshqaruvi qarorlarini bajarish;</p>
                            <p style="text-align: justify;">- pochta manzili, aloqa telefon raqamlari o'zgarganligi
                                haqida Assotsiatsiyani o'z vaqtida xabardor qilish.</p>
                            <p style="text-align: justify;">4.6. Assotsiatsiya a'zoligiga qabul qilish taqdim
                                etilgan ariza asosida, Assotsiatsiya a'zolarini navbatdagi Umumiy yig'ilishda
                                xabardor etish sharti bilan Assotsiatsiya Boshqaruvi tomonidan amalga oshiriladi.
                                Assotsiatsiya a'zosi Assotsiatsiya Ustavida belgilangan miqdordagi a'zolikka kirish
                                badalini Assotsiatsiyaning hisob raqamiga o'tkazgandan so'ng, mazkur Ustavning
                                4.4.-bandida ko'rsatilgan huquqlarga ega bo'ladi.</p>
                            <p style="text-align: justify;">4.7. Assotsiatsiyaga uyushgan a'zolik:</p>
                            <p style="text-align: justify;">4.7.1. O'zbekiston Respublikasi hududida qonunchilikda
                                belgilangan tartibda ro'yxatdan o'tgan, kabel televidiniyesi sohasida barcha yoki
                                bitta faoliyat turini (teledasturlarni tarqatish (translyatsiya, retranslyatsiya)
                                tarmog'i xizmatlarini ko'rsatish, loyihalashtirish, qurish va foydalanish) amalga
                                oshirish uchun litsenziyaga ega bo'lgan, O'zEOAVMA Ustavini va boshqa me'yoriy
                                hujjatlarini tan olgan hamda Assotsiatsiya oldida turgan maqsad va vazifalarni
                                amalga oshirishda o'zining real hissasini qo'sha oladigan yuridik shaxs
                                Assotsiatsiyaning uyushgan a'zosi bo'lishi mumkin.</p>
                            <p style="text-align: justify;">4.7.2. Assotsiatsiyaga uyushgan a'zolik individual
                                shaklda, ixtiyoriy ravishda amalga oshiriladi.</p>
                            <p style="text-align: justify;">4.7.3. Uyushgan a'zolar quyidagi huquqlarga ega:</p>
                            <p style="text-align: justify;">- o'zining vakolatli vakillari orqali Assotsiatsiya
                                a'zolarining Umumiy yig'ilishlarida ovoz berish huquqisiz ishtirok etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning boshqaruv organlari va nazorat
                                organlariga saylash va saylanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning organlari faoliyati yuzasidan
                                takliflar va fikrlar kiritish, koimssiyalar, ishchi guruhlar ishida qatnashish;</p>
                            <p style="text-align: justify;">- davlat hokimiyati va boshqaruvi, sud organlari va
                                boshqa organlarda o'ziga tegishli masalalar ko'rib chiqilayotgan paytda
                                Assotsiatsiya ko'magidan foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning tarkibiy bo'linmalari tomonidan
                                o'tkaziladigan tadbirlar va dasturlarda ishtirok etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning ruxsati bilan Assotsiatsiya
                                atributlari va nishonlaridan belgilangan tartibda foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya faoliyati haqidagi zarur axborotlarni
                                belgilangan tartibda olish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyada mavjud bo'lgan hamda u tomonidan
                                taqdim etiladigan maslahatlar, tavsiyalar axborotlardan beg'araz foydalanish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Boshqaruv raisining qaroriga binoan
                                mazkur Ustavga muvofiq holda Assotsiatsiyaning moddiy-texnik bazasidan
                                foydalanish;</p>
                            <p style="text-align: justify;">- a'zolikning ko'ngilli ravishda amalga oshirilganligini
                                hisobga olgan holda, kamida 1 (bir) oy oldin Asssotsiatsiyaga tegishli ariza bilan
                                murojaat qilib, undan o'z xohishi bilan chiqish.</p>
                            <p style="text-align: justify;">4.7.4. Assotsiatsiyaning uyushgan a'zolarining
                                majburiyatlari:</p>
                            <p style="text-align: justify;">- Assotsiatsiya Ustaviga amal qilish;</p>
                            <p style="text-align: justify;">- o'zining texnikaviy, intellektual zahiralari bilan
                                Assotsiatsiya va uning a'zolari oldida turgan vazifalarni hal etishda
                                ko'maklashish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya va uning a'zolarining qonuniy
                                manfaatlariga zarar yetkazishi mumkin bo'lgan harakatlar qilmaslik;</p>
                            <p style="text-align: justify;">- kirish badali va yillik a'zolik badallarini o'z
                                vaqtida to'lab borish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Boshqaruvi va a'zolarining Umumiy
                                yig'ilishlari qarorlarini bajarish.</p>
                            <p style="text-align: justify;">4.8. Assotsiatsiyaga kirish va yillik a'zolik badali
                                miqdori, uni to'lash tartibi va muddatlari Assotsiatsiya a'zolarining Umumiy
                                yig'ilishi tomonidan belgilanadi.</p>
                            <p style="text-align: justify;">4.9. Assotsiatsiya a'zosi (uyushgan a'zolari) yillik
                                a'zolik badalini belgilangan sanadan 6 (olti) oydan ortiq vaqt davomida to'lamagan
                                hamda badalni to'lamaganligi yuzasidan Assotsiatsiya Boshqaruviga biror
                                asoslantirilgan vajni ko'rsatmagan taqdirda, shuningdek, mazkur Ustav talablarini
                                hamda Assotsiatsiya a'zolarining Umumiy yig'ilishi va O'zEOAVMA Boshqaruvi
                                qarorlarini bajarmagan hamda Assotsiatsiya maqsadlariga zid yoki uning
                                obro'sizlanishiga olib keladigan boshqa harakatlar qilgan taqdirda Assotsiatsiya
                                a'zolarining Umumiy yig'ilishi qaroriga asosan Assotsiatsiya a'zoligidan
                                chiqarilishi mumkin.</p>
                            <p style="text-align: justify;">4.10. Assotsiatsiya a'zoligidan chiqqanda yoki undan
                                chiqarilganda a'zoning (uyushgan a'zoning) Assotsiatsiyaga kiritgan moliyaviy yoki
                                mol-mulk shaklidagi badallari va xayriya mablag'lari qaytarib berilmaydi.</p>
                            <p style="text-align: justify;">4.11. Assotsiatsiya a'zoligidan chiqqan yoki undan
                                chiqarilgan a'zolar (uyushgan a'zolar) hech qanday tovon puli olmaydilar,
                                Assotsiatsiya mulkining biron-bir ulushiga da'vogarlik qilish yoki Assotsiatsiyaga
                                kiritgan mablag'larini qaytarib olish huquqiga ega emaslar, vaqtincha foydalanish
                                uchun yoki ijaraga berilgan mol-mulk bundan mustasno.</p>
                            <p style="text-align: justify;">4.12. Assotsiatsiya a'zolari o'rtasidagi o'zaro
                                munosabat va a'zolarning Assotsiatsiya bilan bevosita munosabati shartnomaviy asosda
                                ham amalga oshirilishi mumkin.</p>
                            <p style="text-align: justify;">4.13. Assotsiatsiyaga a'zolik quyidagi hollarda
                                tugatiladi:</p>
                            <p style="text-align: justify;">- u yoki bu sababga ko'ra a'zoning «OAV sifatida davlat
                                ro'yxatidan o'tganlik haqidagi guvohnoma»si bekor qilinganda yoki tugatilganda;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaga a'zo yuridik shaxs tugatilganda;</p>
                            <p style="text-align: justify;">- Assotsiatsiya tugatilganda.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">5. ASSOTSIATSIYANING BOSHQARUV
                                ORGANI</p>
                            <p style="text-align: justify;">5.1. Assotsiatsiyaning boshqaruv organi
                                quyidagilardir:</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining Umumiy yig'ilishi (matnda
                                bundan buyon “Umumiy yig'ilish” deb ataladi);</p>
                            <p style="text-align: justify;">- Assotsiatsiya Boshqaruvi, Assotsiatsiya Boshqaruvi
                                raisi (matnda bundan buyon “Boshqaruv” deb ataladi);</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning Ijroiya direksiyasi (matnda bundan
                                buyon “Direksiya” deb ataladi).</p>
                            <p style="text-align: justify;">5.2. Umumiy yig'ilish - Assotsiatsiyaning oliy boshqaruv
                                organidir. Umumiy yig'ilish navbatdagi va navbatdan tashqari bo'lishi mumkin.
                                Navbatdagi Umumiy yig'ilish Boshqaruv yoki Boshqaruv raisi tashabbusi bilan bir
                                yilda kamida bir marotaba chaqiriladi. Navbatdan tashqari Umumiy yig'ilish
                                Assotsiatsiya Boshqaruvi raisi, Boshqaruv a'zolarining uchdan biri, Taftish
                                komissiyasi tashabbusi bilan Assotsiatsiyaning moliyaviy-xo'jalik faoliyatining
                                qo'pol buzilishi holatlarida, shuningdek, Assotsiatsiya a'zolarining uchdan bir
                                qismi taqdim etgan yozma talabnoma asosida chaqirilishi mumkin.</p>
                            <p style="text-align: justify;">Umumiy yig'ilish Assotsiatsiyaning mazkur Ustaviga va
                                O'zbekiston Respublikasi qonun hujjatlariga zid bo'lmagan faoliyatiga doir istalgan
                                masalalarni hal qilishga haqli.</p>
                            <p style="text-align: justify;">5.3. Umumiy yig'ilishning mutlaq vakolatlariga quyidagi
                                masalalarni hal etish kiradi:</p>
                            <p style="text-align: justify;">- Assotsiatsiya faoliyatining asosiy yo'nalishlarini
                                aniqlash, belgilash, ularning bajarilishi xaqida hisobot to'plash va rejalarni
                                tasdiqlash;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning Ustaviga o'zgartirish va
                                qo'shimchalarni kiritish, yangi tahrirdagi ustavni tasdiqlash;</p>
                            <p style="text-align: justify;">- Assotsiatsiyani qayta tashkil etish;</p>
                            <p style="text-align: justify;">- tugatish komissiyasini tayinlash, oraliq va yakuniy
                                tugatish balanslarini tasdiqlash hamda tugatish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning mol-mulkini shakllantirish va undan
                                foydalanish tartibi va tamoyillarini belgilash;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Boshqaruvi raisini saylash va uni
                                lavozimidan ozod etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning doimiy ravishda faoliyat yuritadigan
                                kollegial organi - Boshqaruvini tuzish (Boshqaruv tarkibi miqdorini aniqlash, uning
                                a'zolarini saylash, Boshqaruv raisi haqidagi Nizomni, Boshqaruv haqidagi Nizomni
                                tasdiqlash);</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning Taftish komissiyasi a'zolarini
                                saylash;</p>
                            <p style="text-align: justify;">- Boshqaruvning Assotsiatsiyaning o'tgan yilgi faoliyati
                                natijalari haqidagi yillik hisobotlarini tasdiqlash;</p>
                            <p style="text-align: justify;">- Taftish komissiyasi hisobotlarini tasdiqlash;</p>
                            <p style="text-align: justify;">- filiallar va vakolatxonalarni tashkil etish, tugatish,
                                ularning Nizomlarini tasdiqlash;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning faoliyatini to'xtatish to'g'risida
                                qaror qabul qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining a'zolik badallari
                                miqdorini, shaklini va to'lash tartibini belgilash;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zoligidan chiqarish va Assotsiatsiyaga
                                yangi a'zolarni qabul qilish.</p>
                            <p style="text-align: justify;">5.4. Assotsiatsiya a'zolarining Umumiy yig'ilishi -
                                Assotsiatsiyaning har bir a'zosidan bitta vakolatli vakil ishtirok etishi tartibida
                                chaqiriladi.</p>
                            <p style="text-align: justify;">5.5. Boshqaruv, Boshqaruv raisi Assotsiatsiya
                                a'zolarining Umumiy yig'ilishi chaqiriladigan sana haqida Assotsiatsiya a'zolarini
                                yozma ravishda xabardor qilishi shart.</p>
                            <p style="text-align: justify;">5.6. Umumiy yig'ilishda qatnashish uchun ro'yxatdan
                                o'tgan Umumiy yig'ilish a'zolarining soni ular umumiy sonining yarmidan ko'pini
                                tashkil etsa, Umumiy yig'ilish vakolatli hisoblanadi.</p>
                            <p style="text-align: justify;">5.7. Barcha masalalar yuzasidan qarorlar Umumiy
                                yig'ilishda ishtirok etayotgan Assotsiatsiya a'zolarining vakolatli vakillari
                                tomonidan oddiy ko'pchilik ovoz bilan qabul qilinadi.</p>
                            <p style="text-align: justify;">5.8. Umumiy yig'ilishda qabul qilingan qarorlar
                                Assotsiatsiyaning Ustaviga yoki qonun hujjatlariga zid bo'lishi mumkin emas.</p>
                            <p style="text-align: justify;">5.9. Umumiy yig'ilish ishiga Assotsiatsiya Boshqaruvi
                                raisi rahbarlik qiladi.</p>
                            <p style="text-align: justify;">5.10. Assotsiatsiya Boshqaruvi:</p>
                            <p style="text-align: justify;">5.10.1. Umumiy yig'ilish majlislari oralig'idagi davrda
                                umumiy masalalarni jamoatchilik asosida Boshqaruv raisi rahbarligidagi Assotsiatsiya
                                Boshqaruvi hal qiladi.</p>
                            <p style="text-align: justify;">5.10.2. Assotsiatsiya Boshqaruvi tarkibiy miqdorini
                                Umumiy yig'ilish belgilaydi.</p>
                            <p style="text-align: justify;">5.10.3. Assotsiatsiya Boshqaruvi Umumiy yig'ilishda
                                Assotsiatsiya a'zolarining vakolatli vakillari orasidan 3 (uch) yilga saylanadi va
                                o'z faoliyatini Umumiy yig'ilish tasdiqlagan Nizom bo'yicha amalga oshiradi.
                                Assotsiatsiya Boshqaruvi o'z vazifalarini bajarish uchun istalgan davlat idoralari,
                                mulkchilik shaklidan qat'iy nazar korxonalar, tashkilotlar, jismoniy va yuridik
                                shaxslar bilan o'z faoliyati yuzasidan munosabatlar o'rnatishga va tegishli
                                masalalarni hal qilishga haqlidir.</p>
                            <p style="text-align: justify;">5.10.4. Assotsiatsiya Boshqaruvi vakolatlariga quyidagi
                                masalalarni hal qilish kiradi:</p>
                            <p style="text-align: justify;">a) Assotsiatsiya buxgalteriyasining yillik hisoboti va
                                yillik buxgalterlik balanslarini ko'rib chiqish va tasdiqlash, keyinchalik Umumiy
                                yig'ilish tomonidan tasdiqlanish sharti bilan;</p>
                            <p style="text-align: justify;">b) Assotsiatsiyaning moliyaviy rejasini (smetasini)
                                ishlab chiqish va Umumiy yig'ilishda tasdiqlash (Boshqaruv unga o'zgartirishlar
                                kiritishga haqli va ular Umumiy yig'ilishda tasdiqlanishi kerak);</p>
                            <p style="text-align: justify;">v) Umumiy yig'ilish kun tartibini tayyorlash va
                                Assotsiatsiya a'zolarini Umumiy yig'ilish chaqirilganligi haqida xabardor
                                qilish;</p>
                            <p style="text-align: justify;">g) Assotsiatsiya Boshqaruvi raisining Assotsiatsiya
                                Boshqaruvi a'zolari bilan tuziladigan mehnat shartnomasi (kontrakt) loyihasini
                                tayyorlash va tasdiqlash;</p>
                            <p style="text-align: justify;">d) Assotsiatsiya Boshqaruvi raisi tavsiyasi bilan
                                Assotsiatsiya Ijrochi direktorini lavozimiga tasdiqlash va u bilan mehnat
                                shartnomasini (kontrakt) tuzish;</p>
                            <p style="text-align: justify;">ye)&nbsp; Assotsiatsiya qoshida turli xil komissiya,
                                seksiya va markazlar tashkil qilish, shu jumladan maslahat markazlarini, va ularning
                                ishiga kerakli mutaxassilarni jalb qilish;</p>
                            <p style="text-align: justify;">j) Assotsiatsiyaning boshqa tashkilotlarda ishtirok
                                etishi, xo'jalik birlashmalari tashkil etish yoki ushbu birlashmalarda ishtirok
                                etish masalalari bo'yicha tegishli qarorlar qabul qilish va buni keyinchalik Umumiy
                                yig'ilishda tasdiqlash;</p>
                            <p style="text-align: justify;">z) Assotsiatsiyaga yangi a'zolarni, keyinchalik Umumiy
                                yig'ilishda tasdiqlanishi sharti bilan a'zolikka qabul qilish;</p>
                            <p style="text-align: justify;">i) tashkil etilgan xo'jalik yurituvchi sub'ektlarning
                                mol-mulkini shakllantirish va undan foydalanish prinsiplarini, moliyaviy
                                masalalarini va asosiy yo'nalishlarini belgilash;</p>
                            <p style="text-align: justify;">k) Boshqaruv ishining tartibi va tashkiliy asoslarini,
                                shuningdek:</p>
                            <p style="text-align: justify;">- Boshqaruv raisi va a'zolariga haq to'lash tartibi va
                                miqdorini belgilash;</p>
                            <p style="text-align: justify;">- Boshqaruv faoliyatini ta'minlash uchun zarur
                                tashkiliy-xo'jalik sharoitlarini yaratish;</p>
                            <p style="text-align: justify;">l) Umumiy yig'ilish va Boshqaruv qarorlarining
                                bajarilishi va Assotsiatsiyaning joriy faoliyati masalalari bo'yicha Ijrochi
                                direktor hisobotini tinglash;</p>
                            <p style="text-align: justify;">m) Ustavda belgilangan vazifalarni hal qilishga
                                yo'naltirilgan va qaror qabul qilingan vaqtda Assotsiatsiya aktivining 51 foizigacha
                                bo'lgan miqdordagi bitimlarni tuzishga ruxsat berish.</p>
                            <p style="text-align: justify;">5.10.5. Assotsiatsiya Boshqaruvi shuningdek,
                                Assotsiatsiya a'zolari Umumiy yig'ilishi mutloq vakolatiga kiruvchi masalalardan
                                tashqari&nbsp; Assotsiatsiya faoliyati bilan bog'liq bo'lgan boshqa barcha
                                masalalarni hal etadi.</p>
                            <p style="text-align: justify;">5.10.6. Boshqaruv faoliyatiga Boshqaruv raisi boshchilik
                                qiladi. Boshqaruv raisi Boshqaruv nomidan faoliyat ko'rsatish huquqiga ega.</p>
                            <p style="text-align: justify;">Boshqaruv raisi o'z vakolatlarini amalga oshirish
                                imkoniyatiga ega bo'lmagan (kasallik, safar yoki boshqa sabablarga ko'ra) paytda
                                uning qaroriga ko'ra, Raisning vazifalarini Boshqaruv a'zolaridan biri bajaradi.</p>
                            <p style="text-align: justify;">5.10.7. Boshqaruv Assotsiatsiyaga oid qonunchilik
                                hujjatlariga, ushbu Ustavda va shuningdek Assotsiatsiya a'zolari Umumiy yig'ilishida
                                belgilangan barcha qoidalarga amal qilishi shart.</p>
                            <p style="text-align: justify;">5.10.8. Boshqaruv majlislari zaruratga qarab Boshqaruv
                                raisi tomonidan har chorakda kamida bir marta chaqiriladi. Boshqaruv raisi majlis
                                o'tkazilishi haqida Boshqaruv a'zolarini oldindan xabardor qilishi shart.</p>
                            <p style="text-align: justify;">5.10.9. Boshqaruv majlisida Boshqaruv a'zolarining
                                yarmidan ko'pi qatnashayotgan bo'lsa, u vakolatli hisoblanadi.</p>
                            <p style="text-align: justify;">5.10.10. Boshqaruv qarorlari ochiq ovoz berish yo'li
                                bilan qabul qilinadi. Ovozlar teng bo'lib qolganda Boshqaruv raisining ovozi hal
                                qiluvchi hisoblanadi.</p>
                            <p style="text-align: justify;">5.10.11. Boshqaruv yig'ilishlari qarorlari bayonnoma
                                ko'rinishida rasmiylashtiriladi hamda uni Boshqaruv raisi va Boshqaruv a'zolaridan
                                saylangan yig'ilish kotibi imzolaydi.</p>
                            <p style="text-align: justify;">5.10.12. Boshqaruv hujjatlari qarorlar yoki buyruqlar
                                ko'rinishida bo'lib, ularni bajarish barcha Assotsiatsiya a'zolari uchun
                                majburiydir.</p>
                            <p style="text-align: justify;">5.10.13. Assotsiatsiya Boshqaruvi raisi Umumiy yig'ilish
                                tomonidan 3 (uch) yil muddatga saylanadi.</p>
                            <p style="text-align: justify;">5.10.14. Boshqaruv raisining vakolatlari:</p>
                            <p style="text-align: justify;">- Assotsiatsiya faoliyatiga va uning Boshqaruvi
                                faoliyatiga rahbarlik qilish, yuklatilgan vazifalarni bajarish va mazkur Ustavga
                                rioya qilinishini ta'minlash, Boshqaruv a'zolari hamda Ijrochi direktorning
                                vazifalarini belgilash, Assotsiatsiya faoliyatiga ta'lluqli masalalarni hal qilishda
                                ularning vakolatlarini belgilash;</p>
                            <p style="text-align: justify;">- elektron OAVni tashkil etish, takomillashtirish va
                                ularni yanada rivojlantirish bilan bog'liq chora-tadbirlarni ishlab chiqish va
                                amalga oshirishga rahbarlik qilish;</p>
                            <p style="text-align: justify;">- milliy va xorijiy davlat va jamoat tashkilotlarida
                                Assotsiatsiya a'zolarining manfaatlarini ifoda etish va Assotsiatsiya nomidan ish
                                yuritish;</p>
                            <p style="text-align: justify;">- Umumiy yig'ilish va Assotsiatsiya Boshqaruvi
                                qarorlarining bajarilishini tashkil qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya faoliyati huquqiy ta'minlanishini
                                tashkillashtirish, Assotsiatsiya tuzilmaviy bo'limlari faoliyati reglamentini
                                belgilab beradigan hujjatlarni tasdiqlash va O'zEOAVMA tashkil qilgan xo'jalik
                                yurituvchi sub'ektlar faoliyatining ustuvor yo'nalishlarini belgilash;</p>
                            <p style="text-align: justify;">- mahalliy va xorijiy tashkilotlar bilan hamkorlik
                                borasidagi faoliyatga rahbarlik qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya nomidan ishonchnomasiz harakat qilib,
                                O'zbekiston Respublikasi va xorijdagi barcha korxona, muassasa va tashkilotlarda
                                Assotsiatsiya manfaatini ifoda etish;</p>
                            <p style="text-align: justify;">- Boshqaruv faoliyatini tashkil qilish va boshqarish,
                                Boshqaruv majlislarini olib borish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining Umumiy yig'ilishi
                                tasdiqlagan dastur, loyiha va tadbirlarni moliyalashtirish uchun mablag'lar jalb
                                qilishni tashkil etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya dasturlari va loyihalarini ishlab
                                chiqishda ishtirok etish uchun ishchi guruhlarni va muayyan muddatli ijodiy
                                jamoalarni shakllantirish, ekspertlarni jalb etish;</p>
                            <p style="text-align: justify;">- Boshqaruvga tasdiq uchun Ijrochi direktor lavozimiga
                                nomzodni ko'rsatish, Assotsiatsiya nomidan u bilan mehnat shartnomasini (kontrakt)
                                tuzish va unga to'lanadigan haq miqdorini belgilash;</p>
                            <p style="text-align: justify;">- Ijrochi direktorni vazifasidan ozod etish to'g'risida
                                qaror qabul qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning ishchi organlari (komissiya yoki
                                kengashlar)ni tashkil qilish, ularning huquq va majburiyatlarini belgilash;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Ustavida belgilangan vazifalarni
                                bajarishga yo'naltirilgan va qaror qabul qilish vaqtida miqdori Assotsiatsiya
                                aktivlarining 40 foizidan ortiq bo'lmagan mulkni sotib olish yoki uni boshqaga
                                berish bilan bog'liq bitimlar tuzishga oid qarorlarga ruxsat berish;</p>
                            <p style="text-align: justify;">- Boshqaruv tomonidan yuklatilgan alohida vakolatlarni
                                bajarish;</p>
                            <p style="text-align: justify;">- O'zbekiston Respublikasi qonunchiligi va mazkur
                                Ustavga zid bo'lmagan, Assotsiatsiya faoliyatiga taalluqli boshqa masalalarni hal
                                qilish.</p>
                            <p style="text-align: justify;">5.10.15. Boshqaruv raisi o'z vakolatlarining bir qismini
                                Ijrochi direktorga yuklashga haqli.</p>
                            <p style="text-align: justify;">5.11. Assotsiatsiyaning Ijrochi direktori:</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning ma'muriy, moliyaviy, xo'jalik
                                faoliyatini ta'minlaydi va unga amaldagi qonunchilikka muvofiq javobgar bo'ladi;</p>
                            <p style="text-align: justify;">- Ijroiya direksiyasi haqidagi Nizomga qat'iyan rioya
                                qiladi;</p>
                            <p style="text-align: justify;">- o'z vakolatlari doirasida Assotsiatsiya nomidan
                                ishonchnomasiz harakat qiladi;</p>
                            <p style="text-align: justify;">- Boshqaruv raisiga bevosita bo'ysunadi.</p>
                            <p style="text-align: justify;">5.12. Ijrochi direktor vakolatlari:</p>
                            <p style="text-align: justify;">- boshqa tashkilotlar bilan munosabatlarda
                                Assotsiatsiyani ifoda etishda o'z vakolatlari doirasida ishonchnomasiz harakat
                                qilish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya nomidan O'zbekiston Respublikasining
                                amaldagi qonunchiligiga muvofiq shartnomalar, bitimlar, kontraktlar tuzish, xo'jalik
                                faoliyatini yuritish;</p>
                            <p style="text-align: justify;">- moliyaviy, bank va boshqa hujjatlarda birinchi imzo
                                huquqiga ega bo'lish;</p>
                            <p style="text-align: justify;">- ishonchnomalar berish, pul mablag'lari va moddiy
                                boyliklar olish uchun hisob-kitoblarni va to'lov hujjatlarni imzolash;</p>
                            <p style="text-align: justify;">- banklarda Assotsiatsiyaning hisob raqamlarini
                                ochish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining Umumiy yig'ilishi,
                                Assotsiatsiya Boshqaruvi va Boshqaruv raisining qarorlarini bajarish, Boshqaruv
                                majlislarini tayyorlash, Umumiy yig'ilish o'tkazilishi, bayonnomalar yuritilishi va
                                yakunlovchi hujjatlarni rasmiylashtirilishini tashkiliy ta'minlash;</p>
                            <p style="text-align: justify;">- Boshqaruv raisi bilan kelishgan holda Assotsiatsiya
                                ishchi apparatini - Ijroiya direksiyasini tuzish;</p>
                            <p style="text-align: justify;">-&nbsp; Boshqaruv raisi bilan kelishilgan holda shtatlar
                                jadvalini tasdiqlash, Ijroiya direksiyasi xodimlarining ish haqlari miqdori va
                                to'lash sharoitlarini belgilash, ular tomonidan moliyaviy, shartnomaviy va mehnat
                                intizomiga rioya qilinishini ta'minlash, shuningdek ijroiya direksiyasi xodimlarini
                                ishga qabul qilish va ishdan bo'shatish, ularga nisbatan rag'batlantirish va jazo
                                choralarini qo'llash;</p>
                            <p style="text-align: justify;">- o'z vakolatlari doirasiga kiradigan masalalar
                                yuzasidan buyruqlar, farmoyishlar, yo'riqnomalar va boshqa hujjatlar chiqarish;</p>
                            <p style="text-align: justify;">- Boshqaruv va Boshqaruv raisi tomonidan berilgan boshqa
                                vakolatlarni ijro etish.</p>
                            <p style="text-align: justify;">5.13. Ijrochi direktor vakolatlariga Assotsiatsiya
                                Boshqaruvining boshqa organlari vakolatlariga kirmaydigan va O'zbekiston
                                Respublikasi qonunchiligi hamda mazkur Ustavga zid bo'lmagan Assotsiatsiya
                                faoliyatiga taalluqli boshqa barcha masalalarni hal etish kiradi.</p>
                            <p style="text-align: justify;">5.14. Ijrochi direktor o'z vakolatlarini bajara olmay
                                qolgan taqdirda (kasalligi, safardaligi yoki boshqa sabablar bilan) uning
                                vazifalarini ishonchnoma asosida Ijrochi direktor o'rinbosari bajaradi.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">6. TAFTISH KOMISSIYASI</p>
                            <p style="text-align: justify;">6.1. Assotsiatsiyaning xo'jalik yuritish va moliyaviy
                                faoliyati ustidan nazorat organi - Taftish komissiyasi hisoblanib, u Assotsiatsiya
                                a'zolarining vakolatli vakillari orasidan Assotsiatsiya a'zolari Umumiy yig'ilishi
                                tomonidan 3 (uch) kishidan iborat tarkibda 3 (uch) yil muddatga saylanadi.</p>
                            <p style="text-align: justify;">6.2. Taftish komissiyasi Assotsiatsiyaning
                                moliyaviy-xo'jalik faoliyatini nazorat qiladi. Yil yakuni bo'yicha Taftish
                                komissiyasi Umumiy yig'ilish majlisiga tasdiqlash uchun hisobot taqdim etadi.</p>
                            <p style="text-align: justify;">6.3. Taftish komissiyasi vakolatiga shuningdek,
                                manfaatdor shaxslarning Assotsiatsiya bilan tuzilgan bitimlar haqidagi axborotlarini
                                ko'rib chiqish va tegishli qarorlar qabul qilish kiradi.</p>
                            <p style="text-align: justify;">6.4. Taftish komissiyasining vakolati, tuzilishi va
                                faoliyat tartibi Umumiy yig'ilish tomonidan tasdiqlanadigan Taftish komissiyasi
                                to'g'risidagi Nizomda belgilanadi.</p>
                            <p style="text-align: justify;">6.5. Taftish komissiyasi tomonidan Assotsiatsiyaning
                                moliyaviy-xo'jalik faoliyatini tekshirish (taftish qilish) har yili amalga
                                oshiriladi. Taftish komissiyasi alohida maqsadli tekshirishlarni ham o'tkazishga
                                haqli.</p>
                            <p style="text-align: justify;">6.6. Assotsiatsiya Boshqaruv organining qaroriga
                                muvofiq, Assotsiatsiyaning moliyaviy-xo'jalik faoliyatini tekshirish, shartnoma
                                asosida, auditorlik tashkiloti tomonidan ham amalga oshirilishi mumkin.</p>
                            <p style="text-align: justify;"></p>
                            <p class="text_h">7. ASSOTSIATSIYANING MOLIYAVIY-XO'JALIK
                                FAOLIYATI, MULKI VA UNDAN FOYDALANISH TARTIBI</p>
                            <p style="text-align: justify;">7.1. Assotsiatsiyaning mol-mulki asosiy va aylanma
                                vositalaridan hamda boshqa vositalardan, Assotsiatsiyaning mustaqil balansida aks
                                ettirilgan boshqa mulklardan iborat.</p>
                            <p style="text-align: justify;">Assotsiatsiya o'z qaramog'i va boshqaruvida binolar,
                                inshootlar, turar-joy fondi, asbob-uskunalar, jihozlar va boshqa moddiy va nomoddiy
                                mol-mulkka ega bo'lishi mumkin.</p>
                            <p style="text-align: justify;">7.2. Assotsiatsiya mol-mulkini pul va boshqa
                                ko'rinishlarda shakllantirish manbalari quyidagilar hisoblanadi:</p>
                            <p style="text-align: justify;">- Assotsiatsiya a'zolarining badallari;</p>
                            <p style="text-align: justify;">- jamoat tashkilotlari va boshqa tashkilotlar tomonidan
                                (shu jumladan, xorijdan) beriladigan ixtiyoriy mulkiy badallar va qilinadigan
                                xayriyalar, shuningdek, fuqarolarning ixtiyoriy badallari va xayriyalari;</p>
                            <p style="text-align: justify;">- milliy va xorijiy hamkorlar bilan o'zaro kelishuv va
                                loyihalar doirasida qo'lga kiritilgan mablag'lar;</p>
                            <p style="text-align: justify;">- maqsadli yordam, shu jumladan, aniq maqsadli dastur va
                                loyihalarni amalga oshirishga yo'naltirilgan subsidiyalar, ijtimoiy buyurtmalar va
                                grantlar;</p>
                            <p style="text-align: justify;">- tadbirkorlik faoliyatidan olinadigan daromadlar;</p>
                            <p style="text-align: justify;">- foiz hisobida qimmatbaho qog'ozlar (aksiya,
                                obligatsiya)ga joylashtirilgan depozitdagi omonatlardan olinadigan tushumlar;</p>
                            <p style="text-align: justify;">- qonunchilikda taqiqlanmagan boshqa mulkiy va moliyaviy
                                tushumlar.</p>
                            <p style="text-align: justify;">7.3. Assotsiatsiya qonunchilikda belgilangan tartibda
                                o'z mulkiga egalik qilish, undan foydalanish va uni boshqarish huquqiga ega.</p>
                            <p style="text-align: justify;">Assotsiatsiya o'ziga tegishli mol-mulkni moliyaviy
                                mablag'lar bilan birga mustaqil tasarruf etadi.</p>
                            <p style="text-align: justify;">Assotsiatsiya mulkini O'zbekiston Respublikasi
                                qonunchiligi yoki sud qarori bilan belgilangan holatlardan o'zga hollarda olib
                                qo'yishga yo'l qo'yilmaydi.</p>
                            <p style="text-align: justify;">7.4. Assotsiatsiya qonunchilikka muvofiq mol-mulkni o'z
                                vositalari, bank kreditlari va boshqa manbalar hisobidan sotib olish va ijaraga
                                olishga haqlidir.</p>
                            <p style="text-align: justify;">7.5. Assotsiatsiya mulkidan foydalanishning asosiy
                                yo'nalishlari quyidagilardan iborat:</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning Ustav maqsadi va vazifalarini
                                bajarilishini ta'minlash, O'zEOAVMA loyihalarida qantashayotgan o'z a'zolarining
                                faoliyatini qo'llab-quvvatlash;</p>
                            <p style="text-align: justify;">- xayriya maqsadlari;</p>
                            <p style="text-align: justify;">- ushbu Ustavga muvofiq amalga oshiriladigan dasturlar,
                                loyihalar, tadqiqotlar va boshqa tadbirlarni moliyalashtirish;</p>
                            <p style="text-align: justify;">- turli tadbirlar (tanlovlar, seminarlar,
                                konferensiyalar, uchrashuvlar va h.k.)ni tayyorlash va o'tkazishni ta'minlash;</p>
                            <p style="text-align: justify;">- ta'limga yo'naltirilgan tadbirlarni o'tkazish, tajriba
                                almashishga zamin yaratish, mamlakat ichida va chet elda malaka oshirish
                                tadbirlarini tashkil etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiyaning va unga a'zolarning moddiy-texnik
                                bazasini mustahkamlash;</p>
                            <p style="text-align: justify;">- xalqaro aloqalarni rivojlantirish, O'zEOAVMA va uning
                                a'zolarining vakillarini chet el safarlarini tashkil etish;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Ijroiya direksiyasi va ijodiy xodimlar
                                faoliyatini ta'minlash va rag'batlantirish, jalb etiluvchi mutaxassislar mehnatiga
                                haq to'lash;</p>
                            <p style="text-align: justify;">- Assotsiatsiya Ustavida ko'rsatilgan vazifalarni hal
                                etish uchun bo'linmalar va korxonalar tuzish;</p>
                            <p style="text-align: justify;">- yillik Umumiy yig'ilishlar va boshqa yig'ilishlar
                                o'tkazish xarajatlarini hamda Assotsiatsiyaning maqsad va vazifalariga mos keluvchi
                                boshqa xarajatlarni qoplash.</p>
                            <p style="text-align: justify;">7.6. Assotsiatsiyaning mol-mulkini Assotsiatsiya
                                a'zolari yoki boshqa shaxslar o'rtasida taqsimlanishiga yo'l qo'yilmaydi.</p>
                            <p style="text-align: justify;">7.7. Assotsiatsiyaning moliyaviy mablag'larini
                                shakllantirish va ularni sarflash tartibini Boshqaruv belgilaydi.</p>
                            <p style="text-align: justify;">7.8. Assotsiatsiya notijorat tashkiloti hisoblanadi,
                                soliqlar va boshqa majburiy to'lovlarini O'zbekiston Respublikasining qonun
                                hujjatlarida belgilangan tartibda amalga oshiradi.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">8. HISOB VA HISOBOT</p>
                            <p style="text-align: justify;">8.1. Assotsiatsiya ish natijalari hisobini olib boradi.
                                Buxgalteriya va statistika hisoblarini yuritadi. Assotsiatsiyada bu hisob va
                                hisobotlar amaldagi qoidalarga muvofiq olib boriladi.</p>
                            <p style="text-align: justify;">8.2. Assotsiatsiya faoliyatining moliya yili 1 yanvardan
                                31 dekabrgacha belgilanadi.</p>
                            <p style="text-align: justify;">8.3. Assotsiatsiya balansi O'zbekiston Respublikasining
                                milliy valyutasida so'mda belgilanadi.</p>
                            <p style="text-align: justify;">8.4. Hisob-kitob olib borilishi va holati uchun
                                javobgarlik bosh hisobchiga yoki uning vazifasini bajaruvchi mansabdor shaxsga
                                yuklatiladi.</p>
                            <p style="text-align: justify;">8.5. Assotsiatsiya joylashgan binoda zarur hujjatlar
                                yuritiladi va saqlanadi, shu jumladan:</p>
                            <p style="text-align: justify;">8.5.1. Assotsiatsiya ta'sis hujjatlari, shuningdek
                                Assotsiatsiyaning ichki munosabatlarini tartibga soluvchi boshqa me'yoriy hujjatlar,
                                ta'sis hujjatlarga kiritilgan va tasdiqlangan o'zgartirish va qo'shimchalar.</p>
                            <p style="text-align: justify;">8.5.2. Qonunda nazarda tutilgan buxgalterlik
                                hujjatlari.</p>
                            <p style="text-align: justify;">8.5.3. Assotsiatsiya a'zolarining umumiy yig'ilishi
                                bayonnomalari.</p>
                            <p style="text-align: justify;">8.5.4. Assotsiatsiya nomidan ishonch qog'oziga ega
                                xodimlarning ro'yxati.</p>
                            <p style="text-align: justify;">8.5.5. Assotsiatsiyaning hamma xodimlari ro'yxati.</p>
                            <p style="text-align: justify;">8.5.6. Assotsiatsiya faoliyatining statistik
                                ko'rsatkichlari.</p>
                            <p style="text-align: justify;">8.5.7. Auditorning va davlat moliya nazorati organining
                                xulosalari.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h"> 9. FILIALLAR VA VAKOLATXONALAR</p>
                            <p style="text-align: justify;">9.1. Qonun hujjatlariga muvofiq Assotsiatsiya
                                O'zbekiston Respublikasi hududida filial va vakolatxonalar tashkil etishi mumkin.
                                Filial hamda vakolatxonalar yuridik shaxs hisoblanmaydi va O'zbekiston
                                Respublikasining amaldagi qonunchiligiga muvofiq faoliyat ko'rsatadi.</p>
                            <p style="text-align: justify;">9.2. Assotsiatsiya Ustaviga uning filiallari va
                                vakolatxonalarini tashkil etish bilan bog'liq o'zgartirishlar kiritilganligi haqida
                                ro'yxatdan o'tkazuvchi organga belgilangan tartibda xabar beriladi.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">10. ASSOTSIATSIYA XODIMLARINING MEHNATI VA IJTIMOIY TA'MINOTI</p>
                            <p style="text-align: justify;">10.1. Mehnat haqi to'lovi, mehnat va dam olish tartibi,
                                Assotsiatsiya ma'muriyati xodimlarini ijtimoiy ta'minlash, o'qitish hamda sug'urta
                                qilish, xodimlarni yollash O'zbekiston Respublikasining qonunchiligiga muvofiq,
                                tomonlar o'rtasida tuziladigan mehnat shartnomasi bilan tartibga solinadi.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">11. USTAVGA O'ZGARTIRISH VA QO'SHIMCHALAR
                                KIRITISH TARTIBI</p>
                            <p style="text-align: justify;">11.1. Assotsiatsiyaning mazkur Ustaviga kiritiladigan
                                barcha o'zgartirish va qo'shimchalar Assotsiatsiya a'zolarining Umumiy yig'ilishida
                                qabul qilinadi.</p>
                            <p style="text-align: justify;">11.2. Assotsiatsiyaning mazkur Ustaviga kiritiladigan
                                barcha o'zgartirish va qo'shimchalar yozma ravishda rasmiylashtirilishi hamda
                                O'zbekiston Respublikasi qonun hujjatlarida belgilangan tartibda ro'yxatdan
                                o'tkazilishi lozim.</p>
                            <p style="text-align: justify;">11.3. Ustav va Ta'sis shartnomasi matnida nomuvofiqlik
                                paydo bo'lgan hollarda Ustav ustuvor hisoblanadi.</p>
                            <p style="text-align: justify;">&nbsp;</p>
                            <p class="text_h">12. ASSOTSIATSIYANI QAYTA TASHKIL ETISH VA
                                TUGATISH</p>
                            <p style="text-align: justify;">12.1. Assotsiatsiyani qayta tashkil etish
                                (birlashtirish, qo'shish, bo'lib yuborish, ajratish, qaytadan tuzish) Assotsiatsiya
                                a'zolarining Umumiy yig'ilishining qaroriga binoan amalga oshiriladi.</p>
                            <p style="text-align: justify;">12.2. Assotsiatsiya qayta tashkil etilgan taqdirda
                                barcha (Boshqaruv, moliyaviy-xo'jalik, shaxsiy tarkib bo'yicha va boshqa) hujjatlar
                                o'rnatilgan qoidalarga muvofiq huquqiy voris tashkilotga topshiriladi. Huquqiy&nbsp;&nbsp;&nbsp;&nbsp;
                                voris bo'lmagan taqdirda, shuningdek, Assotsiatsiya tugatilganda ilmiy-tarixiy
                                ahamiyatga ega doimiy saqlanuvchi hujjatlar tegishli arxivlarga &nbsp; &nbsp; davlat
                                saqloviga beriladi. Hujjatlarni topshirish va tartibga keltirish arxiv organlarining
                                talabiga muvofiq tarzda Assotsiatsiya hisobidan amalga oshiriladi. Ishdan
                                bo'shatilgan xodimlarning huquq va manfaatlari O'zbekiston Respublikasining qonun
                                hujjatlariga muvofiq kafolatlanadi.</p>
                            <p style="text-align: justify;">12.3. Assotsiatsiyani tugatish Assotsiatsiya
                                a'zolarining Umumiy yig'ilishi yoki sud qaroriga muvofiq yoxud qonun hujjatlarida
                                ko'rsatilgan boshqa asoslarga ko'ra amalga oshirilishi mumkin. Assotsiatsiya Umumiy
                                yig'ilishning qaroriga ko'ra tugatilayotgan bo'lsa, bu haqda qonunda belgilangan
                                muddatda ro'yxatga olgan organni yozma ravishda xabardor qilishi shart.</p>
                            <p style="text-align: justify;">12.4. Umumiy yig'ilish yoki Assotsiatsiyani tugatish
                                to'g'risida qaror qabul kilgan boshqa organ tugatish komissiyasini tayinlaydi,
                                tugatish tartibi va muddatini belgilaydi.</p>
                            <p style="text-align: justify;">12.5. Tugatish komissiyasi Assotsiatsiya tugatilishi
                                haqida matbuotda xabar beradi va kreditorlarning talablarini bildirish tartibi va
                                muddatini belgilaydi, bu muddat tugatish haqida e'lon qilingan kundan e'tiboran ikki
                                oydan kam bo'lmasligi lozim.</p>
                            <p style="text-align: justify;">12.6. Tugatish komissiyasi tuzilgan paytdan boshlab unga
                                Assotsiatsiya ishlarini boshqarish va tugatilayotgan Assotsiatsiya nomidan sudda
                                qatnashish vakolatiga ega.</p>
                            <p style="text-align: justify;">12.7. Tugatish komissiyasi Assotsiatsiyani tugatish
                                uchun zarur bulgan ishlarni amalga oshirishga haqli.</p>
                            <p style="text-align: justify;">12.8. Tugatish komissiyasi qarzdorlarni Assotsiatsiya
                                tugatilishi to'g'risida yozma ravishda xabardor qiladi, qarzdorlarni aniqlaydi va
                                debitorlik qarzlari buyicha qarzlarni to'lanish choralarini ko'radi.</p>
                            <p style="text-align: justify;">12.9. Tugatish komissiyasi qarzdorlar tomonidan da'vo
                                qilish muddati o'tgandan so'ng, oraliq tugatish balansini tuzib chiqadi. Oraliq
                                tugatish balansida Assotsiatsiya mulkining tarkibi to'g'risidagi, qarzdorlarning
                                da'volari ro'yxati va ularning ko'rib chiqish natijalari to'g'risidagi ma'lumotlar
                                ko'rsatib o'tiladi. Oraliq tugatish balansi Umumiy yig'ilish tomonidan yoki
                                Assotsiatsiyani tugatish to'g'risida qaror qabul qilgan organ tomonidan
                                tasdiqlanadi.</p>
                            <p style="text-align: justify;">12.10. Agarda Assotsiatsiya pul mablag'lari
                                qarzdorlarning da'volarini qoplash uchun yetarli bo'lmasa, tugatish komissiyasi sud
                                karorini ijro etish uchun Assotsiatsiyaga tegishli bo'lgan mulklarni savdoga
                                chiqarib, sotishni amalga oshiradi.</p>
                            <p style="text-align: justify;">12.11. Qarzdorlarga pul mablag'larini to'lash tugatish
                                komissiyasi tomonidan oraliq tugatish balansi tasdiqlangan kundan boshlab
                                O'zbekiston Respublikasi Fuqarolik kodeksining 56-moddasida ko'rsatilgan tartibda
                                amalga oshiriladi.</p>
                            <p style="text-align: justify;">12.12. Tugatish komissiyasi karzdorlarga qarzlar
                                to'lanib bo'lingach, tugatish balansini tuzadi. Tugatish balansi umumiy yig'ilish
                                yoki Assotsiatsiyani tugatish to'grisida qaror qabul qilgan organ tomonidan
                                tasdiqlanadi.</p>
                            <p style="text-align: justify;">12.13. Assotsiatsiya byujdet va xodimlari oldidagi
                                majburiyatlari hamda O'zbekiston Respublikasi qonunlarida ko'rsatilgan boshqa
                                majburiyatlar bo'yicha hisob-kitob qilib bo'lgandan so'ng qolgan mulk O'zbekiston
                                Respublikasining qonun hujjatlariga muvofiq Assotsiatsiyaning Ustavida belgilangan
                                maqsadlar uchun ishlatiladi va Assotsiatsiya a'zolari yoki boshqa shaxslar o'rtasida
                                taqsimlanishiga yo'l qo'yilmaydi. Assotsiatsiya o'z faoliyatini tugatgach, davlat,
                                jamoat tashkilotlari va boshqa tashkilotlar, shuningdek, Assotsiatsiya a'zolari va
                                shaxslar tomonidan unga vaqtincha foydalanish uchun berilgan mol-mulk oldingi
                                egalariga qaytariladi.</p>
                            <p style="text-align: justify;">12.14. Assotsiatsiya davlat ro'yxati reyestridan
                                chiqarilgan paytdan boshlab tugatilgan hisoblanadi. Assotsiatsiya tugatilishi bilan
                                ushbu Ustav o'z kuchini yo'qotadi.</p>
                            <p style="text-align: justify;">12.15. Ushbu Ustavda nazarda tutilmagan holatlar
                                O'zbekiston Respublikasining qonun hujjatlariga muvofiq hal etiladi.</p>
                            <p style="text-align: justify;">Ustavning ushbu yangi tahriri 2015 yilning 11
                                mayida Assotsiatsiya a'zolarining Umumiy yig'ilishida tasdiqlandi va 2003 yil 10
                                dekabrda Assotsiatsiya a'zolari Konferensiyasida tasdiqlangan Ustavni bekor
                                qiladi.</p>
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