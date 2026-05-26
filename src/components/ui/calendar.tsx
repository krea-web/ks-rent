import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * Calendar — wrapper su react-day-picker v9.
 * NB: l'API classNames di v9 è diversa da v8 (months→month_caption,
 * head_row→weekdays, cell→day, day→day_button, day_selected→selected,
 * nav_button→button_previous/next, IconLeft/Right→Chevron). Celle 44px
 * per target touch mobile-friendly. Stile gold coerente col brand.
 */
function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center h-9",
        caption_label: "text-sm font-semibold",
        nav: "flex items-center justify-between absolute inset-x-0 top-1 px-1 pointer-events-none",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-9 w-9 bg-transparent p-0 opacity-70 hover:opacity-100 pointer-events-auto rounded-lg",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-9 w-9 bg-transparent p-0 opacity-70 hover:opacity-100 pointer-events-auto rounded-lg",
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-11 font-normal text-[0.8rem]",
        week: "flex w-full mt-1",
        day: "h-11 w-11 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 w-11 p-0 font-normal rounded-lg aria-selected:opacity-100 hover:bg-gold/15",
        ),
        selected:
          "[&>button]:bg-gold [&>button]:text-white [&>button]:hover:bg-gold/90 [&>button]:focus:bg-gold rounded-lg",
        today: "[&>button]:border [&>button]:border-gold/50 [&>button]:font-semibold",
        outside: "text-muted-foreground opacity-40",
        disabled: "text-muted-foreground opacity-30 [&>button]:cursor-not-allowed [&>button]:line-through",
        range_start: "rounded-l-lg [&>button]:bg-gold [&>button]:text-white",
        range_end: "rounded-r-lg [&>button]:bg-gold [&>button]:text-white",
        range_middle: "bg-gold/15 [&>button]:!bg-transparent [&>button]:!text-foreground rounded-none",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...rest }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" {...rest} />
          ) : (
            <ChevronRight className="h-4 w-4" {...rest} />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
