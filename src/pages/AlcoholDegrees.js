import React, { useState, useEffect } from 'react';

export const AlcoholDegrees = () => {
  const [data, setData] = useState('');
  const [uvValue, setUvValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulatedFetchData = async () => {
      const apiKey = 'UMJYKO0LB1O6GNN0';
      const channelId = 2436920;
      const fieldNumber = '1';

      try {
        const response = await fetch(`https://api.thingspeak.com/channels/${channelId}/fields/${fieldNumber}/last.json?api_key=${apiKey}`);
        const data = await response.json();

        if (data && data.field1 !== undefined) {
          const value = parseFloat(data.field1);
          console.log('Simulated UV Value:', value);
          // No actual state update here, just a simulation
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    simulatedFetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      let baseValue = (Math.random() * 10 + 40).toFixed(2); 

      const generateValue = () => {
        const step = (Math.random() * 1 - 0.5).toFixed(2); 
        const newValue = (parseFloat(baseValue) + parseFloat(step)).toFixed(2);

        if (newValue >= 40 && newValue <= 50) {
          setData(newValue);
          setUvValue(newValue); 
        }
      };

      generateValue();
    }
  }, [loading]);

  return (
    <section>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='data'>Datos</label>
          <input type='text' id='data' value={loading ? '' : data} readOnly />
        </div>
        <div className='form-control'>
          <label htmlFor='uvValue'>Alcohol Value</label>
          <input type='text' id='uvValue' value={loading ? 'Loading...' : uvValue} readOnly />
        </div>
      </form>
    </section>
  );
};
