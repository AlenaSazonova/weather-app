import styled from "styled-components";


export const WeatherAppContainer = styled.div`
    
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const LocationInput = styled.input`
    border-radius: 20px;
    border: 4px solid #007BFF;
    max-width: 500px;
    width: 100%;
    height: 80px;
    font-size: 30px;
    font-weight: 400;
    line-height: 262%;
    padding-left: 20px;
`;

export const SubmitButton = styled.button`
    border-radius: 20px;
    max-width: 250px;
    width: 100%;
    height: 84px;
    background: #007BFF;
    font-weight: 700;
    font-size: 30px;
    line-height: 247%;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 50px;

    &:hover {
        background: #052d59;
    }
`;

export const WeatherInfo = styled.div`
    font-size: 50px;
    margin-left: 40px;
    
    p {
        padding-bottom: 20px;
    }
`;

export const LocationName = styled.p`
    
`;

export const Temperature = styled.p`
    
`;

export const WeatherDescription = styled.p`
    
`;

export const Humidity = styled.p`
    
`;

export const WindSpeed = styled.p`
    
`;