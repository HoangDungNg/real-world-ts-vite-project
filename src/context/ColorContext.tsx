import { createContext, ReactNode, useState } from "react";
import { GLTFResult } from "@components";
import { ECOLOR } from "@constant";
import { ColorProps } from "@constant";
import { useGLTF } from "@react-three/drei";

type ColorContextType = {
  currentColor: ColorProps;
  changeColorContext: (props: ColorProps) => void;
};

type ColorContextProviderType = {
  children: ReactNode;
};

const initCurrentColor: ColorProps = {
  name: "",
  hexColor: "",
  rgbColor: "",
};

export const ColorContext = createContext<ColorContextType>({
  currentColor: initCurrentColor,
  changeColorContext: (props: ColorProps) => {
    console.log(props);
  },
});

export const ColorContextProvider = ({ children }: ColorContextProviderType) => {
  const { materials } = useGLTF("/scene.gltf") as GLTFResult;
  const [currentColor, setCurrentColor] = useState<ColorProps>({
    hexColor: ECOLOR.SierraBlue.hexColor,
    name: ECOLOR.SierraBlue.name,
    rgbColor: ECOLOR.SierraBlue.rgbColor,
  });

  const changeColorContext = (colorObj: ColorProps) => {
    materials.Body.color.set(colorObj.hexColor);
    setCurrentColor(colorObj);
  };

  return (
    <ColorContext.Provider value={{ currentColor, changeColorContext }}>
      {children}
    </ColorContext.Provider>
  );
};
