import { Row, Col ,Badge} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaStar,FaGamepad,FaLinux,FaApple
 
} from 'react-icons/fa';
export default function HomeGameCard({data}) {
  
  const [previewImage,setPreviewImage]=useState(null)
  const handleMouseEnter=(MyImg)=>{
    setPreviewImage(MyImg)
  }
  const handleLeave=()=>{
    setPreviewImage(null)
  }
  const getPlatformIcon = (platformSlug) => {
      switch (platformSlug) {
        case 'pc':
          return <FaWindows title="PC" />;
        case 'playstation':
          return <FaPlaystation title="PlayStation" />;
        case 'xbox':
          return <FaXbox title="Xbox" />;
        case 'mac':
          return <FaApple title={platformSlug} />;
          case 'linux':
          return <FaLinux title={platformSlug} />;
        default:
          return <FaGamepad title={platformSlug} />;
      }
    };

  return (

    
  <Link to={`/game-details/${data.id}`} state={{ gameData: data }}>
    <Row className="my-4">
      <Col md={5}>
        <img
          src={previewImage==null?data.background_image:previewImage}
          alt="background"
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        />
      </Col>

      <Col md={7}>
        <h2 className="text-center fw-semibold mb-3">{data.name}</h2>

        {/* Top Row of Screenshots */}
        <Row className="mb-3 g-3">
          <Col xs={6}>
            <img onMouseEnter={()=>handleMouseEnter(data.short_screenshots[1]?.image)} onMouseLeave={handleLeave}
              src={data.short_screenshots[1]?.image}
              alt="ss1"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col xs={6}>
            <img onMouseEnter={()=>handleMouseEnter(data.short_screenshots[2]?.image)} onMouseLeave={handleLeave}
              src={data.short_screenshots[2]?.image}
              alt="ss2"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </Col>
        </Row>

        <Row className="g-3">
          <Col xs={6}>
            <img onMouseEnter={()=>handleMouseEnter(data.short_screenshots[3]?.image)} onMouseLeave={handleLeave}
              src={data.short_screenshots[3]?.image}
              alt="ss3"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col xs={6}>
            <img onMouseEnter={()=>handleMouseEnter(data.short_screenshots[4]?.image)} onMouseLeave={handleLeave}
              src={data.short_screenshots[4]?.image}
              alt="ss4"
              className="img-fluid rounded"
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </Col>
        </Row>

<Row className="mt-3 align-items-center">
            <Col xs={4} className="text-center">
              <FaStar className="text-warning me-1" />
              <strong>{data.rating}</strong>
            </Col>

            <Col xs={4} className="text-center">
              <div className="d-flex justify-content-center gap-2 fs-5">
                {data.parent_platforms.map((p) => (
                  <span key={p.platform.id}>
                    {getPlatformIcon(p.platform.slug)}
                  </span>
                ))}
              </div>
            </Col>

            <Col xs={4} className="text-center">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {data.tags.slice(0, 2).map((tag) => (
                  <Badge bg="info" text="dark" key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>      </Col>
    </Row>
    </Link>
  );
}
