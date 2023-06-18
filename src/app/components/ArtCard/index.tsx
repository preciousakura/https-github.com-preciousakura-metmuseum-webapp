import { Art } from "@/app/types/art";
import { Box, ImageStyle } from "./styles";
import { BiWorld } from "react-icons/bi";
import { MdOutlineHideImage } from "react-icons/md";
import { Tooltip } from "antd";
import { AiOutlineStar } from "react-icons/ai";

interface ArtCardProps {
  art: Art;
}
export function ArtCard({ art }: ArtCardProps) {
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
      {/* <div className="favorite">
        <AiOutlineStar size={23} />
      </div> */}
      {/* 
      }
      <h2>{art.artistDisplayName}</h2>
      <h2>{art.period}</h2> */}
    </Box>
  );
}
