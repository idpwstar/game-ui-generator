import React, { useState, useRef } from 'react';
import ControlPanel from './components/ControlPanel.jsx';
import UiPreview from './components/UiPreview.jsx';
import { useImageCanvas } from './hooks/useImageCanvas.js';

export default function UiGeneratorPage() {
  const [userName, setUserName] = useState('리지');
  const [characterQuote, setCharacterQuote] = useState('안녕하세요 저는 돌곰이에요');
  const [stamina, setStamina] = useState(100);
  const [producerRank, setProducerRank] = useState(6); 
  const [profileImg, setProfileImg] = useState('https://via.placeholder.com/300');

  // [신규] 상단 타이틀 텍스트 상태 (디폴트: STARLIGHT)
  const [topTitle, setTopTitle] = useState('ARCH');

  // 커스텀 포지션 태그 상태
  const [positionTag1, setPositionTag1] = useState('메인보컬');
  const [positionTag2, setPositionTag2] = useState('센터');

  // 세부 능력치 상태
  const [vocal, setVocal] = useState(87);
  const [dance, setDance] = useState(74);
  const [visual, setVisual] = useState(92);
  const [charm, setCharm] = useState(88);

  // 테마 색상 상태
  const [themeColor, setThemeColor] = useState('pink');

  // 상단 재화 및 레벨 상태
  const [hearts, setHearts] = useState(4);
  const [gold, setGold] = useState('1,240');
  const [diamond, setDiamond] = useState(38);
  const [level, setLevel] = useState(24);

  const uiRef = useRef(null);
  const { downloadToImage } = useImageCanvas(uiRef, userName);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen bg-slate-900 text-white p-6 gap-6 justify-center items-start w-full max-w-[1600px] mx-auto">
      <ControlPanel 
        userName={userName} setUserName={setUserName}
        characterQuote={characterQuote} setCharacterQuote={setCharacterQuote}
        stamina={stamina} setStamina={setStamina}
        producerRank={producerRank} setProducerRank={setProducerRank}
        handleImageUpload={handleImageUpload}
        downloadToImage={downloadToImage}
        
        // 상단 타이틀 상태 전달
        topTitle={topTitle} setTopTitle={setTopTitle}
        
        // 포지션 태그 상태 전달
        positionTag1={positionTag1} setPositionTag1={setPositionTag1}
        positionTag2={positionTag2} setPositionTag2={setPositionTag2}
        
        // 능력치 state 전달
        vocal={vocal} setVocal={setVocal}
        dance={dance} setDance={setDance}
        visual={visual} setVisual={setVisual}
        charm={charm} setCharm={setCharm}
        
        // 테마 및 재화 state 전달
        themeColor={themeColor} setThemeColor={setThemeColor}
        hearts={hearts} setHearts={setHearts}
        gold={gold} setGold={setGold}
        diamond={diamond} setDiamond={setDiamond}
        level={level} setLevel={setLevel}
      />
      
      <div className="flex-1 w-full flex justify-center sticky top-6">
        <UiPreview 
          uiRef={uiRef}
          userName={userName}
          characterQuote={characterQuote}
          stamina={stamina}
          producerRank={producerRank}
          profileImg={profileImg}
          topTitle={topTitle}
          positionTag1={positionTag1}
          positionTag2={positionTag2}
          
          vocal={vocal} dance={dance} visual={visual} charm={charm}
          themeColor={themeColor}
          hearts={hearts} gold={gold} diamond={diamond} level={level}
        />
      </div>
    </div>
  );
}