import { useEffect } from 'react';
import '../assets/css/style.css';
import 'animate.css';
import Header from '../components/Header';
import StartYourCarrer from '../components/StartYourCarrer';
import ProgramDetails from '../components/ProgramDetails';
import Accreditation from '../components/Accreditation';
import Scholarships from '../components/Scholarships';
import Academic from '../components/Academic';
import Placements from '../components/Placements';
import CallAction from '../components/CallAction';
import WhoCan from '../components/WhoCan';
import LearnformExperts from '../components/LearnformExperts';
import CallSection from '../components/CallSection';
import ProgramCurriculum from '../components/ProgramCurriculum';
import AdmissionProcess from '../components/AdmissionProcess';
import Eligibility from '../components/Eligibility';
import ScrollCTA from '../components/ScrollCTA';
import LifeatRvs from '../components/LifeatRvs';
import Faq from '../components/Faq';
import Tools from '../components/Tools';
import Footer from '../components/Footer';
// const Header = lazy(() => import("../components/Header"));
// const StartYourCarrer = lazy(() => import("../components/StartYourCarrer"));
// const ProgramDetails = lazy(() => import("../components/ProgramDetails"));
// const Accreditation = lazy(() => import("../components/Accreditation"));
// const Scholarships = lazy(() => import("../components/Scholarships"));
// const Academic = lazy(() => import("../components/Academic"));
// const Placements = lazy(() => import("../components/Placements"));
// const CallAction = lazy(() => import("../components/CallAction"));
// const WhoCan = lazy(() => import("../components/WhoCan"));
// const LearnformExperts = lazy(() => import("../components/LearnformExperts"));
// const CallSection = lazy(() => import("../components/CallSection"));
// const ProgramCurriculum = lazy(() => import("../components/ProgramCurriculum"));
// const AdmissionProcess = lazy(() => import("../components/AdmissionProcess"));
// const Eligibility = lazy(() => import("../components/Eligibility"));
// const ScrollCTA = lazy(() => import("../components/ScrollCTA"));
// const LifeatRvs = lazy(() => import("../components/LifeatRvs"));
// const Faq = lazy(() => import("../components/Faq"));
// const Tools = lazy(() => import("../components/Tools"));
// const Footer = lazy(() => import("../components/Footer"));
import $ from 'jquery';
export default function HomePage() {
    const higlights = {
        title: 'For more information about the Program Highlights',
        btnname: 'Get Brochure',
        para: 'Get your education exposure by pursuing advanced courses with us.',
        tag: 'higlights',
    };
    const curriculum = {
        title: 'For more information about the Curriculum',
        btnname: 'Get Brochure',
        para: ' Compete in dynamic industries with the essential skills that we teach you.',
        tag: 'curriculum',
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            var touchEvent = $('#academic').position();
            var placeEvent = $('#place').position();
            var scroll = $(window).scrollTop();
            if (touchEvent.top - 300 <= scroll) {
                $('.cardHeader').css('transform', 'translateY(50px)');
                $('.cardElemts').css('transform', 'translateY(120px)');
            } else if (placeEvent.top >= scroll) {
                $('.cardHeader').css('transform', 'translateY(366px)');
                $('.cardElemts').css('transform', 'translateY(800px)');
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <StartYourCarrer />
            <ProgramDetails />
            <CallAction curriculum={higlights} />
            <Accreditation />
            <Scholarships />
            <WhoCan />
            <ProgramCurriculum />
            <CallAction curriculum={curriculum} />
            <Tools />
            <LearnformExperts />
            <CallSection />
            <LifeatRvs />
            <Academic />
            <Placements />
            <Eligibility />
            <AdmissionProcess />
            <Faq />
            <Footer />
            <ScrollCTA />
        </div>
    );
}
