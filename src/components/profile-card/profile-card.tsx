import { Typography } from '@/components/typography';
import { cn } from '@/lib/utils';
import { AddIcon, CheckIcon } from '@/components/icons';
import { Button } from '../ui/button';

//-------------------------------------------------------------------------

interface ProfileCardProps {
  className?: string;
  userName: string;
  userHandle: string;
  src: string;
  types?: 'follower' | 'following';
}

export default function ProfileCard({
  className,
  userName,
  userHandle,
  src,
  types,
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        'bg-neutral2-2 rounded-[1.25rem] p-3 flex flex-col justify-center gap-3 hover:bg-neutral2-5 focus:border-[3px] focus:border-neutral2-10',
        className,
      )}
    >
      <div className="profile-info flex items-start gap-3">
        <div id="avatar-user" className="relative">
          <div className="absolute size-[1.25rem] -left-1 -top-1 rounded-full bg-[#F8F8F8] border-[3px] border-[#323232]"></div>

          <img
            src={src}
            alt="avatar"
            className="rounded-full min-w-[44px] size-[44px]"
          />
        </div>
        <div className="grow flex flex-col gap-1">
          <Typography level="base2sm" className="text-white">
            {userName}
          </Typography>
          <Typography className="text-tertiary opacity-80" level="captionr">
            {userHandle}
          </Typography>
        </div>

        {/* <Button
          child={types === 'follower' ? <AddIcon /> : <CheckIcon />}
          className="hidden md:flex rounded-full p-[10px] size-[40px]"
        /> */}
        <Button className='p-[10px] text-[.8rem]'>Đồng ý</Button>
        <Button className='p-[10px] text-[.8rem]'>Hủy</Button>
      </div>
    </div>
  );
}
