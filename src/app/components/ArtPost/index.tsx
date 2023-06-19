import { useEffect, useState } from "react";
import { Box, ImageStyle } from "./styles";
import { Art } from "@/app/types/art";
import { objects } from "@/app/services/objects";
import { MdOutlineHideImage } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { Spin, Tooltip } from "antd";
import { BiWorld } from "react-icons/bi";
import { RiUserFill } from "react-icons/ri";
import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";
import { RiStarFill } from "react-icons/ri";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

interface ArtPostProps {
  id: number;
}

export function ArtPost({ id }: ArtPostProps) {
  const [data, setData] = useState<Art>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    objects
      .getById(id)
      .then((d) => {
        setData(d);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Box>
      {loading ? (
        <div className="spinner">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          {data?.isPublicDomain && (
            <Tooltip title="Item de domínio público">
              <div className="public-domain">
                <BiWorld size={27} color="white" />
              </div>
            </Tooltip>
          )}

          {data?.isHighlight && (
            <Tooltip title="Item popular e importante na coleção">
              <div className="is-highlight">
                <RiStarFill size={27} color="white" />
              </div>
            </Tooltip>
          )}

          <div className="image">
            {data && data.primaryImage !== "" ? (
              <ImageStyle src={data.primaryImage} />
            ) : (
              <div className="no-image">
                <MdOutlineHideImage size={80} />
              </div>
            )}
          </div>

          <div className="card-info">
            <h2>{data?.title}</h2>

            <div className="title-art">
              <FaPaintBrush size={22} />
              <h3>Sobre a obra</h3>
            </div>

            <h5>
              <b>Local: </b>
              {data?.geographyType === "" && data?.country === ""
                ? "Sem informações"
                : `${data?.geographyType} ${
                    data?.country && data?.country + ", "
                  }${data?.state && data?.state + ", "}${
                    data?.city && data?.city
                  }`}
            </h5>

            <h5>
              <b>Dimensões: </b>
              {data?.dimensions === "" ? "Sem informações" : data?.dimensions}
            </h5>

            <h5>
              <b>Material: </b>
              {data?.medium === "" ? "Sem informações" : data?.medium}
            </h5>

            <h5>
              <b>Departamento: </b>
              {data?.department === "" ? "Sem informações" : data?.department}
            </h5>

            <h5>
              <b>Tipo de objeto: </b>
              {data?.objectName === "" ? "Sem informações" : data?.objectName}
            </h5>

            <h5>
              <b>Data: </b>
              {!data?.objectDate ? "Sem informações" : data?.objectDate}
            </h5>

            {data?.objectURL && (
              <Link target="_blank" href={data.objectURL}>
                <div className="more-info-artist">
                  Mais informações sobre o objeto
                </div>
              </Link>
            )}

            <div className="title-art">
              <RiUserFill size={22} />
              <h3>Sobre o artista</h3>
            </div>

            <h5>
              <b>Nome: </b>
              {data?.artistDisplayName === ""
                ? "Sem informações"
                : data?.artistDisplayName}

              {data?.artistBeginDate !== "" &&
                data?.artistEndDate !== "" &&
                ` (${data?.artistBeginDate}-${data?.artistEndDate})`}
            </h5>

            <h5>
              <b>Gênero: </b>
              {data?.artistGender === ""
                ? "Sem informações"
                : data?.artistGender}
            </h5>

            <h5>
              <b>Especialidade: </b>
              {data?.artistRole === "" ? "Sem informações" : data?.artistRole}
            </h5>

            <h5>
              <b>Nacionalidade: </b>
              {data?.artistNationality === ""
                ? "Sem informações"
                : data?.artistNationality}
            </h5>

            {data?.artistWikidata_URL && (
              <Link target="_blank" href={data.artistWikidata_URL}>
                <div className="more-info-artist">
                  Mais informações sobre o artista
                </div>
              </Link>
            )}
          </div>
        </>
      )}
    </Box>
  );
}
