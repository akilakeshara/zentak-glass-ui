import React, { useState } from 'react';

export default function TaskBoard({ className = '' }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review UI design changes', completed: false, category: 'Work' },
    { id: 2, text: 'Brainstorm for new YouTube video', completed: false, category: 'Creative' },
    { id: 3, text: 'Complete React assignment', completed: true, category: 'University' },
    { id: 4, text: 'Upload Reel to TikTok & FB', completed: false, category: 'Social' },
    { id: 5, text: 'Buy some aquarium plants', completed: false, category: 'Personal' },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const categoryColors = {
    Work: 'text-cyan-400',
    Creative: 'text-rose-500',
    University: 'text-yellow-500',
    Social: 'text-teal-500',
    Personal: 'text-fuchsia-500'
  };

  return (
    <div className={`w-full max-w-md bg-white/[0.03] backdrop-blur-[30px] border border-white/10 rounded-[30px] p-6 md:p-8 flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden ${className}`}>
      
      {/* Header with Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 text-white">
          <h2 className="font-semibold text-2xl tracking-wide m-0">Today's Focus ✨</h2>
          <span className="text-slate-400 text-sm font-mono">{completedTasks}/{totalTasks} Done</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_0_15px_rgba(0,229,255,0.5)]" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Task List (Scrollable) */}
      <div className="flex flex-col gap-3.5 overflow-y-auto pr-1.5 max-h-[350px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`
              bg-white/5 border rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 relative overflow-hidden
              hover:translate-x-1 hover:bg-white/10
              ${task.completed ? 'border-fuchsia-500/50 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10'}
            `}
            onClick={() => toggleTask(task.id)}
          >
            {/* Custom Checkbox */}
            <div className="relative w-5 h-5 flex-shrink-0">
              <div className={`
                absolute top-0 left-0 w-5 h-5 rounded-md border-2 flex justify-center items-center transition-all duration-300
                ${task.completed ? 'bg-fuchsia-500 border-fuchsia-500 shadow-[0_0_10px_#a855f7]' : 'bg-white/10 border-white/20'}
              `}>
                <svg 
                  className={`w-3.5 h-3.5 text-white transition-all duration-200 transform ${task.completed ? 'scale-100' : 'scale-0'}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-1 transition-all duration-300">
              <span className={`text-[0.95rem] transition-all duration-300 ${task.completed ? 'line-through text-slate-400' : 'text-white'}`}>
                {task.text}
              </span>
              <span className={`text-[0.65rem] uppercase font-medium tracking-widest opacity-80 ${categoryColors[task.category] || 'text-slate-300'}`}>
                {task.category}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
