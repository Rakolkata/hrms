"use strict";(()=>{var e={};e.id=3161,e.ids=[3161],e.modules={2983:(e,t,a)=>{a.d(t,{A:()=>n});let r=require("mysql2/promise"),n=a.n(r)().createPool({host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASSWORD,database:process.env.DB_NAME})},3480:(e,t,a)=>{e.exports=a(5600)},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6435:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},7060:(e,t,a)=>{a.r(t),a.d(t,{config:()=>d,default:()=>l,routeModule:()=>c});var r={};a.r(r),a.d(r,{default:()=>i});var n=a(3480),o=a(8667),u=a(6435),s=a(2983);async function i(e,t){try{let e=`
      SELECT 
        u.empid,
        u.name,
        u.email,
        u.role,
        MAX(a.check_in) AS last_login,
        MAX(a.check_out) AS last_logout,
        SUM(TIMESTAMPDIFF(SECOND, a.check_in, a.check_out)) / 3600 AS total_hours,
        CASE 
          WHEN u.status = 'Logged In' THEN 'Logged In'
          WHEN u.status = 'Logged Out' THEN 'Logged Out'
          ELSE 'N/A'
        END AS status
      FROM 
        users u
      LEFT JOIN 
        attendance a ON u.empid = a.empid
      WHERE 
        u.role = 'employee'
      GROUP BY 
        u.empid
      ORDER BY 
        last_login DESC
    `,[a]=await s.A.execute(e),r=a.map(e=>({empid:e.empid,name:e.name,email:e.email,role:e.role,last_login:e.last_login,last_logout:e.last_logout,total_hours:e.total_hours,status:e.status}));t.status(200).json(r)}catch(e){console.error("Error fetching attendance data:",e),t.status(500).json({error:"Server error"})}}let l=(0,u.M)(r,"default"),d=(0,u.M)(r,"config"),c=new n.PagesAPIRouteModule({definition:{kind:o.A.PAGES_API,page:"/api/hr/attendance",pathname:"/api/hr/attendance",bundlePath:"",filename:""},userland:r})},8667:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return a}});var a=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var a=t(t.s=7060);module.exports=a})();