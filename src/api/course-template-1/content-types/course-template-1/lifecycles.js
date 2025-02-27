// const { errors } = require("@strapi/utils");
// const { ApplicationError } = errors;

// let country;
// let timezone;

// module.exports = {
//   async beforeUpdate(event) {
//     const { data, where } = event.params;

//     // Fetch the current data for the record being updated
//     const currentData = await strapi.db
//       .query("api::course-template-1.course-template-1")
//       .findOne({
//         where,
//         select: ["id", "code", "masterCourse"], // Fetch 'id', 'code', and 'masterCourse'
//         populate: {
//           country: { select: ["id"] }, // Fetch only the 'id' of the country
//           timezone: { select: ["id"] }, // Fetch only the 'id' of the timezone
//         },
//       });

//     // Check for uniqueness of the 'code' field
//     if (data?.code && data.code !== currentData.code) {
//       const isCodeAlreadyExists = await strapi.db
//         .query("api::course-template-1.course-template-1")
//         .findOne({
//           where: { code: data.code, id: { $ne: currentData.id } },
//           select: ["id"],
//         });

//       if (isCodeAlreadyExists) {
//         throw new ApplicationError("This attribute must be unique ", {
//           errors: [
//             {
//               path: ["code"],
//               message: "This attribute must be unique ",
//               name: "ValidationError",
//             },
//           ],
//         });
//       }
//     }

//     // Check if 'masterCourse' is selected (either in the payload or the current data)
//     const isMasterCourseCurrentlySelected = currentData?.masterCourse; // Check if masterCourse is already selected
//     const isMasterCourseBeingUnselected = data?.masterCourse === null; // Check if masterCourse is being set to null

//     // If masterCourse is being unselected, skip validation
//     if (isMasterCourseBeingUnselected) {
//       return; // No validation needed
//     }

//     // If masterCourse is currently selected OR being added, validate 'country' and 'timezone'
//     if (data?.masterCourse || isMasterCourseCurrentlySelected) {
//       const hasCountry =
//         (data?.country?.connect && data?.country?.connect?.length > 0) ||
//         (currentData?.country &&
//           !data?.country?.disconnect?.find(
//             (d) => d.id === currentData?.country?.id
//           ));

//       const hasTimezone =
//         (data?.timezone?.connect && data?.timezone?.connect?.length > 0) ||
//         (currentData?.timezone &&
//           !data?.timezone?.disconnect?.find(
//             (d) => d.id === currentData?.timezone?.id
//           ));

//       // Validate 'country' presence
//       if (!hasCountry) {
//         const countryError = "The 'country' field must be selected when 'masterCourse' is selected.";
//         throw new ApplicationError(
//           countryError,
//           { errors: [{ path: ["country"], message: countryError, name: "ValidationError", }, ], }
//         );
//       }

//       // Validate 'timezone' presence
//       if (!hasTimezone) {
//         const timezoneError = "The 'timezone' field must be selected when 'masterCourse' is selected.";
//         throw new ApplicationError(
//          timezoneError,
//           { errors: [{path: ["timezone"], message: timezoneError, name: "ValidationError", }, ], }
//         );
//       }
//     }
//   },

//   async beforeCreate(event) {
//     const { data } = event.params;

//     if (data?.masterCourse) {
//       if (
//         !data?.country ||
//         !data?.country?.connect ||
//         data?.country?.connect?.length === 0
//       ) {
//         throw new ApplicationError(
//           "The 'country' field must be selected when 'masterCourse' is selected.",
//           {
//             errors: [
//               {
//                 path: ["country"],
//                 message:
//                   "The 'country' field must be selected when 'masterCourse' is selected.",
//                 name: "ValidationError",
//               },
//             ],
//           }
//         );
//       }

//       if (
//         !data?.timezone ||
//         !data?.timezone?.connect ||
//         data?.timezone?.connect?.length === 0
//       ) {
//         throw new ApplicationError(
//           "The 'timezone' field must be selected when 'masterCourse' is selected.",
//           {
//             errors: [
//               {
//                 path: ["timezone"],
//                 message:
//                   "The 'timezone' field must be selected when 'masterCourse' is selected.",
//                 name: "ValidationError",
//               },
//             ],
//           }
//         );
//       }
//     }

//     if (data?.code) {
//       const isCodeAlreadyExists = await strapi.db
//         .query("api::course-template-1.course-template-1")
//         .findOne({
//           where: { code: data?.code },
//           select: ["id"],
//         });

//       if (isCodeAlreadyExists) {
//         throw new ApplicationError("This attribute must be unique ", {
//           errors: [
//             {
//               path: ["code"],
//               message: "This attribute must be unique ",
//               name: "ValidationError",
//             },
//           ],
//         });
//       }
//     }
//   },
// };
