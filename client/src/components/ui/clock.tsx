
import * as React from "react"
import { cn } from "@/lib/utils"

interface ClockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  darkMode?: boolean
}

export function Clock({
  className,
  size = 200,
  darkMode = false,
  ...props
}: ClockProps) {
  const [time, setTime] = React.useState(new Date())
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5
  const minuteDegrees = minutes * 6
  const secondDegrees = seconds * 6
  
  const hourHandStyle = {
    transform: `translateX(-50%) rotate(${hourDegrees}deg)`,
    height: `${size * 0.25}px`,
    backgroundColor: darkMode ? 'white' : 'black'
  }
  
  const minuteHandStyle = {
    transform: `translateX(-50%) rotate(${minuteDegrees}deg)`,
    height: `${size * 0.35}px`,
    backgroundColor: darkMode ? 'white' : 'black'
  }
  
  const secondHandStyle = {
    transform: `translateX(-50%) rotate(${secondDegrees}deg)`,
    height: `${size * 0.38}px`,
    backgroundColor: 'hsl(var(--primary))'
  }
  
  return (
    <div 
      className={cn(
        "relative rounded-full flex items-center justify-center", 
        darkMode ? "bg-slate-900 text-white" : "bg-white text-black",
        "border-4 border-slate-300 dark:border-slate-700",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      {/* Clock face */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="absolute font-semibold"
          style={{
            transform: `rotate(${i * 30}deg) translateY(-${size * 0.41}px) rotate(-${i * 30}deg)`,
          }}
        >
          {i === 0 ? 12 : i}
        </div>
      ))}
      
      {/* Clock hands */}
      <div 
        className="absolute left-1/2 bottom-1/2 w-[2px] origin-bottom rounded-full"
        style={hourHandStyle}
      />
      <div 
        className="absolute left-1/2 bottom-1/2 w-[2px] origin-bottom rounded-full"
        style={minuteHandStyle}
      />
      <div 
        className="absolute left-1/2 bottom-1/2 w-[1px] origin-bottom rounded-full"
        style={secondHandStyle}
      />
      
      {/* Center dot */}
      <div className="absolute w-3 h-3 bg-primary rounded-full" />
    </div>
  )
}
