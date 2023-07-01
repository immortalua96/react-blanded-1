import PropTypes from 'prop-types'
import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({title, total, icon}) => {
  return <StatisticBox>
  <IconContext.Provider value={{ color: "blue",  size: '1em' }}>
                  {icon}
                </IconContext.Provider>
  <StatisticCounter>{total}</StatisticCounter>
  <StatisticText>{title}</StatisticText>
</StatisticBox>;
};

StatisticItem.propTypes={
  title:PropTypes.string.isRequired,
  total:PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired
}