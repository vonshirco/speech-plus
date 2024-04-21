import React from 'react';
import './Benefits.css';
import efficiency_icon from '../../assets/efficiency.png';
import cost_savings_icon from '../../assets/cost-savings.png';
import communication_icon from '../../assets/communication.png';
import accessibility_icon from '../../assets/accessibility.png';
import virtual_services_img from '../../assets/virtual.jpg'

const Benefits = () => {
  const benefits = [
    {
      icon: efficiency_icon,
      title: 'Improved Efficiency',
      description: 'Utilizing our services leads to optimized processes, minimizing time and resource wastage, and boosting productivity.'
    },
    {
      icon: cost_savings_icon,
      title: 'Cost Savings',
      description: 'Our solutions help in cutting operational costs, optimizing resource utilization, and maximizing return on investment.'
    },
    {
      icon: communication_icon,
      title: 'Enhanced Communication',
      description: 'We facilitate seamless communication channels, fostering collaboration and information sharing among team members and stakeholders.'
    },
    {
      icon: accessibility_icon,
      title: 'Greater Accessibility',
      description: 'Our services ensure information and resources are easily accessible to all stakeholders, enhancing transparency and inclusivity.'
    }
  ];

  return (
    <div className="benefits">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit">
          <img src={benefit.icon} alt={`Icon ${index + 1}`} />
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}

    </div>

    
  );
};

export default Benefits;
