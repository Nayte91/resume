import BlockTitle from "../../00-atoms/texts/BlockTitle/BlockTitle"
import SkillItem from "../../01-molecules/SkillItem/SkillItem"
import "./_MiscellaneousBlock.scss"

interface MiscellaneousBlockProps {
    miscDataFirst: any[];
    miscDataSecond: any[];
}

const MiscellaneousBlock:React.FC<MiscellaneousBlockProps> = ({miscDataFirst, miscDataSecond}) => (
    <section className="knowledge__miscellaneous">
        <BlockTitle title="compétences" />
        <div className="miscellaneous__list">
            <ul>{miscDataFirst.map(skill => <SkillItem key={skill} skill={skill} />)}</ul>
            <ul>{miscDataSecond.map(skill => <SkillItem key={skill} skill={skill} />)}</ul>
        </div>
    </section>
)

export default MiscellaneousBlock