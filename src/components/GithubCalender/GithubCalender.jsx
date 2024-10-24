import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "../../hoc";

const GithubCalender = () => {

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Works</p>
                    <h2 className={styles.sectionHeadText}>Github Contribution_</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                <div className="flex items-center justify-center lg:w-[1000px]">
                    <GitHubCalendar
                        username="md-arman-hosen"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(GithubCalender, "");