import { Link } from "react-router-dom";
/* izpolzvane na Link. Taka ako cyknem na About page - shte ni otvede v neq. Kato vlezem v neq ako cyknem na Home page - shte ni otvede v neq.
tova raboti na principa na linka, no Link e samo za componenti. Ako iskame da ni prenasochva kym link, koyto ne e component ili fayl ot prilozhenieto - tr pak da go napravim po standartniq nachin, pr:
<a href='https://johnsmilga.com/'>best web dev courses</a> */
const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to="about">About Page</Link>
    </div>
  );
};
export default HomeLayout;
