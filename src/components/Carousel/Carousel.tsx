import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
// Components
import Slider from './Slider';
import UserCard from './UserCard';

const SliderProps = {
  zoomFactor: 30, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};

// Types
export type User = {
  abilities: string[];
  alias: string[];
  gender: string;
  hair: string;
  id: number;
  img_url: string;
  name: string;
  origin: string;
  species: string;
  status: string;
};

const App: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<User>(
    {} as User
  );

  const handleDialogOpen = (user: User) => {
    setIsDialogOpen(true);
    setActiveUser(user);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch('https://finalspaceapi.com/api/v0/character/')
      ).json();
      setData(data);
    };

    getData();
  }, []);

  console.log(data);

  if (data.length < 1) return <div>Loading ...</div>;

  return (
    <>
      <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen}>
        <UserCard user={activeUser} />
      </Dialog>

      <Slider {...SliderProps}>
        {data.map(user => (
          <div key={user.id} onClick={() => handleDialogOpen(user)}>
            <img src={user.img_url} alt='user' />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default App;