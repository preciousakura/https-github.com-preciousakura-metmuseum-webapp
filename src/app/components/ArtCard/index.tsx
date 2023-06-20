import { Box, ImageStyle } from "./styles";
import { BiWorld } from "react-icons/bi";
import { MdOutlineHideImage } from "react-icons/md";
import { Spin, Tooltip } from "antd";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useFavorites } from "@/app/context/useFavorites";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiStarFill } from "react-icons/ri";
import { useArt } from "@/app/hooks/useArt";
import { LoadingOutlined } from "@ant-design/icons";

interface ArtCardProps {
  artId: number;
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export function ArtCard({ artId }: ArtCardProps) {
  const [fav, setFav] = useState(false);
  const { isFavorite, setFavorite } = useFavorites();

  const { data: art, loading, error } = useArt(artId);

  const router = usePathname();
  const path = router.replace("/", "");

  useEffect(() => {
    if (art) setFav(isFavorite(art.objectID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [art]);

  const onChangeFavorite = () => {
    setFav(!fav);
    if (art) setFavorite(art.objectID);
  };

  return (
    <Box>
      {loading ? (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : art ? (
        <>
          <Link href={`/${path}/${art.objectID}`}>
            {art.primaryImageSmall === "" ? (
              <div className="no-image">
                <MdOutlineHideImage size={80} />
              </div>
            ) : (
              <ImageStyle src={art.primaryImageSmall} />
            )}
          </Link>
          <div className="art-info">
            <Link href={`/${path}/${art.objectID}`}>{art.title}</Link>
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

          {art.isHighlight && (
            <Tooltip title="Item popular e importante na coleção">
              <div className="is-highlight">
                <RiStarFill size={20} color="white" />
              </div>
            </Tooltip>
          )}
          <Tooltip
            title={fav ? "Remover dos favoritos" : "Marcar como favorito"}
          >
            <button
              className={`favorite ${fav ? "active" : "inactive"}`}
              onClick={onChangeFavorite}
            >
              <AiFillHeart size={23} />
            </button>
          </Tooltip>
        </>
      ) : (
        <div className="content-feedback">
          <p>{error}</p>
        </div>
      )}
    </Box>
  );
}
