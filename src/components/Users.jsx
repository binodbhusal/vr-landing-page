import { BsFillCircleFill } from 'react-icons/bs';
import avatar1 from '../assets/img/avt1.png';
import avatar2 from '../assets/img/avt2.png';
import avatar3 from '../assets/img/avt3.png';
import avatar4 from '../assets/img/avt4.png';

const users = [
  {
    id: 1,
    imageUrl: avatar1,
  },
  {
    id: 2,
    imageUrl: avatar2,
  },
  {
    id: 3,
    imageUrl: avatar3,
  },
  {
    id: 4,
    imageUrl: avatar4,
  },
];
const Users = () => (

  <div className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row space-y-0 lg:justify-start">
    <div className="flex -space-x-2">
      {users.map((image) => (
        <div className="w-12 h-12 rounded-full" key={image.id}>
          <img src={image.imageUrl} alt="" />
        </div>
      ))}
    </div>
    <div className="flex items-center space-x-2 font-secondary font-medium">
      <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
      <div>400k people online</div>
    </div>
  </div>
);
export default Users;
