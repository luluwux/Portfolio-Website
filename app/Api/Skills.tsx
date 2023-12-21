import Image from 'next/image';
import React from 'react';
import { skillsImage } from '../Utils/_SkillsImage';
import Settings from '../Settings/Config';

function Skills() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 w-[80%] mx-auto">
        {Settings.Skills.map((skill, id) => (
          <div
            className="flex flex-col justify-between transition duration-500 transform hover:scale-110"
            key={id}
          >
            <div className="flex items-center gradient-border-skills h-24">
              <Image className="w-8 h-8" src={skillsImage(skill)} alt={skill} />
              <p className="ml-2 text-white font-normal">{skill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
