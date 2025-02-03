import {
  AvatarIcon,
  EarthIcon,
  EditIcon,
  LinkIcon,
  OutlineCheckIcon,
  OutlineInfoIcon,
  SecurityIcon,
  SolidCheckIcon,
  TagIcon,
} from '@/components/icons';
import { Switch } from '@/components/switch';
import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

//-------------------------------------------------------------------------

export default function UserInfo() {
  return (
    <section className="w-full h-full mt-[3rem] p-3">
      <div className="flex flex-col rounded-[2rem] bg-neutral2-2">
        <div className="w-full px-4 py-3">
          <Typography
            level="hairline1"
            className="text-tertiary uppercase opacity-50"
          >
            edit profile
          </Typography>
        </div>

        <ul className="w-full">
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className=" text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <AvatarIcon></AvatarIcon>
              Name
            </Typography>

            <div className="w-full flex justify-between items-center">
              <Input
                type="text"
                className="grow text-white text-sm opacity-80"
                value="Moyo Shiro"
              />
              <SolidCheckIcon></SolidCheckIcon>
            </div>
          </li>

          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className=" text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <TagIcon></TagIcon>
              Username
            </Typography>

            <div className="w-full flex justify-between items-center">
              <Input
                type="text"
                className="grow text-white  text-sm opacity-80"
                value="Moyo Shiro"
              />
              <OutlineCheckIcon></OutlineCheckIcon>
            </div>
          </li>

          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
            <Typography
              level="base2r"
              className=" text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <EditIcon></EditIcon>
              Bio
            </Typography>
            <Textarea
              typeof="text"
              className="grow min-h-[8.75rem] max-h-[8.75rem] bg-transparent focus:outline-none text-white text-sm opacity-80"
            >
              🎨 UI/UX Designer | 💡 Crafting seamless digital experiences🚀
              Designing user-centric interfaces📍 NYC | Post on #Design #UX #UI
            </Textarea>
          </li>

          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className=" text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <LinkIcon></LinkIcon>
              Link
            </Typography>

            <div className="w-full flex justify-between items-center">
              <Input
                type="text"
                className="grow text-white text-sm opacity-80"
                value="https://200lab.io"
              />
              {/* <OutlineCheckIcon></OutlineCheckIcon> */}
            </div>
          </li>

          <li className="p-4 flex gap-2 items-center md:gap-3">
            <Typography
              level="base2r"
              className=" text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <SecurityIcon></SecurityIcon>
              Change Password
            </Typography>
            <Button className='text-white/80'>
              Change
            </Button>
          
          </li>

          <li className="p-4 flex justify-between md:justify-start md:gap-3 items-center text-white">
            <Typography
              level="base2r"
              className=" text-white opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <EarthIcon></EarthIcon>
              Location
            </Typography>

            <Typography level="base2r" className=" opacity-80 text-white">
              Ho Chi Minh, Viet Nam
            </Typography>
         
          </li>
          <li>
          <Button className='text-white/80'>
              Change Information More
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}
