import Badge from '@/components/badge/badge';
import Right from '@/components/button/right';
import { Typography } from '@/components/typography';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from './navigation-items';

type NavigationBarProps = HTMLAttributes<HTMLDivElement> & {
  expanded?: boolean;
  navigationItems: NavigationItem[];
};

export default function NavigationBar({
  navigationItems,
  className,
  expanded,
  ...props
}: NavigationBarProps) {
  return (
    <nav
      {...props}
      className={cn(`flex flex-col items-center gap-1`, className)}
    >
      {navigationItems.map(({ Icon, title, path, update }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({
            isActive,
            isPending,
          }: {
            isActive: any;
            isPending: any;
          }) =>
            `group relative z-0 rounded-xl text-white hover:bg-neutral1-5  ${expanded ? 'w-full' : 'w-fit'} ${
              isActive
                ? ` active bg-zinc-700 `
                : isPending
                  ? ''
                  : ''
            }`
          }
        >
          <div
            className={`group/sub   group-[.active]:text-white  group-[.active]:p-[5px] hover:bg-neutral1-5  flex items-center gap-3 p-1.5 rounded-[10px] backdrop-blur-16 relative z-1 ${expanded ? '' : 'w-fit'}`}
          >
            <span className="relative inline-flex p-1">
              {update && (
                <span className="absolute z-20 -top-[4px] -right-[4px]">
                  {update.count !== 1 ? (
                    <Badge content={update.count} />
                  ) : (
                    <Badge />
                  )}
                </span>
              )}
              {Icon}
            </span>
            {expanded && (
              <>
                <Typography
                  level="base2r"
                  style={{ color: 'white' }} // Thay đổi màu sắc trực tiếp

                  className="text-white select-none opacity-80 group-[.active]:text-white group-[.active]:font-semibold group-hover:text-white"
                >
                  {title}
                </Typography>
                <span className="absolute right-0 p-1 hidden group-hover/sub:block group-[.active]:group-hover/sub:hidden ">
                  <Right />
                </span>
              </>
            )}
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
