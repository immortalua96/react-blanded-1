import PropTypes from 'prop-types'
import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const icons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>,<GiTreeDoor/>]


export const Statistics = ({title, stats}) => {
  return (
    <>
      {title&&<StatisticTitle>{title}</StatisticTitle>}

<StatisticsList>
  {stats.map((item, index)=> <StatisticItem key={item.id } title={item.title} total={item.total} icon={icons[index]}/>)}
</StatisticsList>
    </>
  );
};

Statistics.propTypes={
  title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired
}
