import Image from 'next/image';
import React from 'react';
import { skillsImage } from '../Utils/_SkillsImage';
import Settings from '../Settings/Config'

function Skills() {

  return (
    <div>
      <div className="flex grid grid-cols-4 gap-8 mt-8 w-[70%] justify-center mx-auto">
        {Settings.Skills.map((skill, id) => (
          <div className="flex flex-col justify-between transition duration-500 transform hover:scale-110 w-full">
            <div className='flex items-center gradient-border-skills w-full h-24' key={id}>
              <Image className='w-8 h-8' src={skillsImage(skill)} alt={skill} />
              <p className='ml-2 text-white font-normal'>{skill}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills