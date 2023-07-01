import PropTypes from 'prop-types'


import { Avatar, Card, CardBody, CardFooter, CardHeader, CardPoster, CardText, CardTitle, Tag, UserBox, UserInfo, UserName ,Date} from "./BlogCard.styled";
import { formatDate } from 'utilites/FormatDate/FormatDate';


export const BlogCard = ({poster,tag,title,description,userName,avatar,postedAt}) => {
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={tag}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
    <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
        <Date>{formatDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
};

BlogCard.propTypes={
  poster:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  userName:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  postedAt:PropTypes.string.isRequired,
}