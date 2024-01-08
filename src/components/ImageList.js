

function ImageList({ imgData }) {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {imgData.length > 0 ? (
          imgData.map((item, i) => {
            return (
              <div key="i">
                <img src={`http://localhost:8080/view/file/${item.id}`} alt="" style={{ width: 200 }} />
              </div>
            );
          })
        ) : (
          <p>no image</p>
        )}
      </div>
    </>
  );
}
export default ImageList;
