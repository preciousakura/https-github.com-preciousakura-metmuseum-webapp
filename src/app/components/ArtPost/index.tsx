import { useEffect, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { usePost } from "@/app/hooks/usePost";
import { useFavorites } from "@/app/context/useFavorites";
import { Box, ContentImage, ImageStyle } from "./styles";
import { Spin, Tooltip } from "antd";
import { MdOutlineHideImage } from "react-icons/md";
import { RiStarFill, RiUserFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface ArtPostProps {
  id: number;
}

export function ArtPost({ id }: ArtPostProps) {
  const { data, loading } = usePost(id);

  const [fav, setFav] = useState(false);
  const { isFavorite, setFavorite } = useFavorites();

  const onChangeFavorite = () => {
    setFav(!fav);
    if (data?.objectID) setFavorite(data.objectID);
  };

  useEffect(() => {
    if (data?.objectID) setFav(isFavorite(data.objectID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const artist = [
    {
      label: "Nome",
      value: `${data?.artistDisplayName}${
        data?.artistBeginDate &&
        data.artistEndDate &&
        ` (${data.artistBeginDate}-${data.artistEndDate})`
      }`,
    },
    { label: "Gênero", value: data?.artistGender },
    { label: "Especialidade", value: data?.artistRole },
    { label: "Nacionalidade", value: data?.artistNationality },
  ];

  const object = [
    {
      label: "Local",
      value: `${data?.geographyType && data.geographyType + " "}${
        data?.country && data?.country + ", "
      }${data?.state && data?.state + ", "}${data?.city}`,
    },
    { label: "Dimensões", value: data?.dimensions },
    { label: "Material", value: data?.medium },
    { label: "Departamento", value: data?.department },
    { label: "Tipo de objeto", value: data?.objectName },
    { label: "Data", value: data?.objectDate },
  ];

  const img = useMemo(() => {
    if (data) {
      const image = new Image();
      image.src = data.primaryImageSmall;
      return {
        src: data.primaryImageSmall,
        width: image.width,
        height: image.height,
      };
    }
    return { src: "", width: 0, height: 0 };
  }, [data]);

  return (
    <Box>
      {loading ? (
        <div className="content-feedback">
          <Spin indicator={antIcon} />
        </div>
      ) : data ? (
        <div className="content">
          {data.isPublicDomain && (
            <Tooltip title="Item de domínio público">
              <div className="public-domain">
                <BiWorld size={27} color="white" />
              </div>
            </Tooltip>
          )}
          {data.isHighlight && (
            <Tooltip title="Item popular e importante na coleção">
              <div className="is-highlight">
                <RiStarFill size={27} color="white" />
              </div>
            </Tooltip>
          )}
          <ContentImage width={img.width} height={img.height}>
            {data.primaryImage === "" ? (
              <MdOutlineHideImage size={80} />
            ) : (
              <ImageStyle
                src={img.src}
                width={img.width}
                height={img.height}
                alt={data.title}
                sizes="(max-width: 800px) 100vw, 100vh"
              />
            )}
            <Tooltip
              title={fav ? "Remover dos favoritos" : "Marcar como favorito"}
            >
              <button
                className={`favorite ${fav ? "active" : "inactive"}`}
                onClick={onChangeFavorite}
              >
                <AiFillHeart size={27} />
              </button>
            </Tooltip>
          </ContentImage>
          <div className="content-text">
            <div className="content-text-header">
              <h2>{data.title}</h2>
              <h3>{data.creditLine}</h3>
            </div>
            <div className="details">
              <div className="object-details">
                <div className="label object">
                  <FaPaintBrush size={22} />
                  <h3>Sobre a obra</h3>
                  {data.objectWikidata_URL !== "" && (
                    <Tooltip title="Mais informações sobre a obra">
                      <Link href={data.objectWikidata_URL} target="_blank">
                        <BsInfoCircleFill />
                      </Link>
                    </Tooltip>
                  )}
                </div>
                <div className="information">
                  {object.map((a, i) => {
                    return (
                      <h4 key={i}>
                        <b>{a.label}: </b>
                        <span>
                          {a.value === "" ? "Sem informações" : a.value}
                        </span>
                      </h4>
                    );
                  })}
                </div>
              </div>
              <div className="artist-details">
                <div className="label artist">
                  <RiUserFill size={22} />
                  <h3>Sobre o artista</h3>
                  {data.artistWikidata_URL !== "" && (
                    <Tooltip title="Mais informações sobre o artista">
                      <Link href={data.artistWikidata_URL} target="_blank">
                        <BsInfoCircleFill />
                      </Link>
                    </Tooltip>
                  )}
                </div>
                <div className="information">
                  {artist.map((a, i) => {
                    return (
                      <h4 key={i}>
                        <b>{a.label}: </b>
                        <span>
                          {a.value === "" ? "Sem informações" : a.value}
                        </span>
                      </h4>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-feedback">
          <p>Nenhuma informação foi encontrada</p>
        </div>
      )}
    </Box>
  );
}
