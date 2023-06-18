import { Art } from "@/app/types/art";
import { Box, ImageStyle } from "./styles";
import { BiWorld } from "react-icons/bi";
import { MdOutlineHideImage } from "react-icons/md";
import { Tooltip } from "antd";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { useHover } from "usehooks-ts";
import { isFavorite, setFavorite } from "@/app/utils/localStorange";

interface ArtCardProps {
  art: Art;
}

export function ArtCard({ art }: ArtCardProps) {
  const [fav, setFav] = useState(false);
  const favoriteRef = useRef<HTMLButtonElement>(null);
  const isHover = useHover(favoriteRef);

  useEffect(() => {
    setFav(isFavorite(art.objectID));
  }, [art]);

  const onChangeFavorite = () => {
    setFav(!fav);
    setFavorite(art.objectID);
  };

  return (
    <Box>
      {art.primaryImageSmall === "" ? (
        <div className="no-image">
          <MdOutlineHideImage size={80} />
        </div>
      ) : (
        <ImageStyle src={art.primaryImageSmall} />
      )}
      <div className="art-info">
        <h2 className="title">{art.title}</h2>
        <h2 className="artist">{art.artistDisplayName}</h2>
        <h2 className="artist">{art.artistDisplayBio}</h2>
      </div>
      {art.isPublicDomain && (
        <Tooltip title="Item de domínio público">
          <div className="public-domain">
            <BiWorld size={20} color="white" />
          </div>
        </Tooltip>
      )}
      <Tooltip title={fav ? "Remover dos favoritos" : "Marcar como favorito"}>
        <button
          ref={favoriteRef}
          className="favorite"
          onClick={onChangeFavorite}
        >
          {fav ? (
            isHover ? (
              <AiOutlineHeart size={23} />
            ) : (
              <AiFillHeart size={23} />
            )
          ) : isHover ? (
            <AiFillHeart size={23} />
          ) : (
            <AiOutlineHeart size={23} />
          )}
        </button>
      </Tooltip>
    </Box>
  );
}
