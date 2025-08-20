import RoBosunTapperImg from "../images/tapperPage/roboTapper.png";
import ModularDesignGif from "../images/tapperPage/modular_design.gif";
import SafetyImg from "../images/tapperPage/safety.png";
import AIGif from  "../images/tapperPage/ai.gif";
import RectractableArmGif from "../images/tapperPage/retractable_arm.gif";

const highlights = [
    {
        title: ["Mobile Base", "No Mounting Fixtures Needed"],
        description: ["Smoothly moves on the rooftop for easy positioning", "Eliminates the need for building-mounted fixtures"],
        image: RoBosunTapperImg,
        imageAlt: "RoBosun Tapper",
        backgroundColor: "#c5c5c5",
        imagePlacement: "right"
    },
    {
        title: ["Modular Design"],
        description: ["Facilitates quick and easy setup"],
        image: ModularDesignGif,
        imageAlt: "Modular Design",
        backgroundColor: "#ffffff",
        imagePlacement: "left"
    },
    {
        title: ["Enhanced Safety"],
        description: ["Reduces risks associated with manual inspections"],
        image: SafetyImg,
        imageAlt: "Enhanced Safety",
        backgroundColor: "#c5c5c5",
        imagePlacement: "right"
    },
    {
        title: ["AI Analysis"],
        description: ["Uses AI to analyze sound data, achieving high accuracy"],
        image: AIGif,
        imageAlt: "AI Analysis",
        backgroundColor: "#ffffff",
        imagePlacement: "left"
    },
    {
        title: ["Next Gen Feature"],
        description: ["Retractable arm enables inspection of non-flat surfaces"],
        image: RectractableArmGif,
        imageAlt: "Next Gen Feature",
        backgroundColor: "#c5c5c5",
        imagePlacement: "right"
    }
];

export default highlights;