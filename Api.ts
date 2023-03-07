// // /* eslint-disable */
// // /* tslint:disable */
// // /*
// //  * ---------------------------------------------------------------
// //  * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
// //  * ##                                                           ##
// //  * ## AUTHOR: acacode                                           ##
// //  * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
// //  * ---------------------------------------------------------------
// //  */

// // export interface Provincia {
// //   id?: string | null;
// //   nombre?: string | null;
// //   latitud?: string | null;
// //   longitud?: string | null;
// //   ciudades?: Ciudad[] | null;
// // }

// // export interface Ciudad {
// //   id?: string | null;
// //   nombre?: string | null;
// //   ciudadOrigen?: string | null;
// //   latitud?: string | null;
// //   longitud?: string | null;
// //   provinciaId?: string | null;
// //   provincia?: Provincia;
// //   companyias?: Companyia[] | null;
// // }

// // export interface Perfil {
// //   /** @format int32 */
// //   id?: number;
// //   nombre?: string | null;
// //   /** @format date-time */
// //   nacido?: string | null;
// //   telefono?: string | null;
// //   avatar?: string | null;
// //   /** @format int32 */
// //   numeroPartidas?: number | null;
// //   /** @format int32 */
// //   partidasGanadas?: number | null;
// //   /** @format int32 */
// //   partidasPerdidas?: number | null;
// //   /** @format int32 */
// //   usuarioId?: number;
// //   usuario?: Usuario;
// // }

// // export interface Partida {
// //   /** @format int32 */
// //   id?: number;
// //   /** @format date-time */
// //   fecha?: string | null;
// //   minutos?: string | null;
// //   segundos?: string | null;
// //   imagen?: string | null;
// //   salaId?: string | null;
// //   /** @format int32 */
// //   equipoId?: number;
// //   sala?: Sala;
// //   equipo?: Equipo;
// // }

// // export interface Equipo {
// //   /** @format int32 */
// //   id?: number;
// //   nombre?: string | null;
// //   avatar?: string | null;
// //   activado?: boolean;
// //   equiposUsuarios?: EquiposUsuarios[] | null;
// //   partidas?: Partida[] | null;
// //   noticias?: Noticia[] | null;
// // }

// // export interface EquiposUsuarios {
// //   /** @format int32 */
// //   equipoId?: number;
// //   /** @format int32 */
// //   usuarioId?: number;
// //   equipo?: Equipo;
// //   usuario?: Usuario;
// // }

// // /** @format int32 */
// // export enum Estado {
// //   Value0 = 0,
// //   Value1 = 1,
// //   Value2 = 2,
// // }

// // export interface UsuariosAmigos {
// //   /** @format int32 */
// //   usuarioId?: number;
// //   /** @format int32 */
// //   amigoId?: number;
// //   estado?: Estado;
// //   amigo?: Usuario;
// //   usuario?: Usuario;
// // }

// // export interface Usuario {
// //   /** @format int32 */
// //   id?: number;
// //   nick?: string | null;
// //   email?: string | null;
// //   activado?: boolean;
// //   perfil?: Perfil;
// //   equiposUsuarios?: EquiposUsuarios[] | null;
// //   noticias?: Noticia[] | null;
// //   usuariosAmigos?: UsuariosAmigos[] | null;
// // }

// // export interface Noticia {
// //   /** @format int32 */
// //   id?: number;
// //   /** @format date-time */
// //   fecha?: string;
// //   titular?: string | null;
// //   textoCorto?: string | null;
// //   textoLargo?: string | null;
// //   imagen?: string | null;
// //   link?: string | null;
// //   promocionada?: boolean | null;
// //   /** @format int32 */
// //   numeroFavoritos?: number | null;
// //   /** @format int32 */
// //   numeroComentarios?: number | null;
// //   companyiaId?: string | null;
// //   /** @format int32 */
// //   usuarioId?: number | null;
// //   /** @format int32 */
// //   equipoId?: number | null;
// //   companyia?: Companyia;
// //   usuario?: Usuario;
// //   equipo?: Equipo;
// // }

// // export interface Companyia {
// //   id?: string | null;
// //   nombre?: string | null;
// //   direccion?: string | null;
// //   email?: string | null;
// //   telefono?: string | null;
// //   web?: string | null;
// //   tripAdvisor?: string | null;
// //   facebook?: string | null;
// //   latitud?: string | null;
// //   longitud?: string | null;
// //   numeroLocal?: string | null;
// //   googleMaps?: string | null;
// //   numeroOpiniones?: string | null;
// //   codigoPostal?: string | null;
// //   instagram?: string | null;
// //   puntuacion?: string | null;
// //   rango?: string | null;
// //   ciudadId?: string | null;
// //   ciudad?: Ciudad;
// //   noticias?: Noticia[] | null;
// //   salas?: Sala[] | null;
// // }

// // export interface Dificultad {
// //   id?: string | null;
// //   tipo?: string | null;
// //   /** @format int32 */
// //   numeroSalas?: number;
// //   salas?: Sala[] | null;
// // }

// // export interface Publico {
// //   id?: string | null;
// //   tipo?: string | null;
// //   /** @format int32 */
// //   numeroSalas?: number;
// //   salasPublico?: SalasPublico[] | null;
// // }

// // export interface SalasPublico {
// //   salaId?: string | null;
// //   publicoId?: string | null;
// //   publico?: Publico;
// //   sala?: Sala;
// // }

// // export interface Tematica {
// //   id?: string | null;
// //   tipo?: string | null;
// //   /** @format int32 */
// //   numeroSalas?: number;
// //   salasTematicas?: SalasTematicas[] | null;
// // }

// // export interface SalasTematicas {
// //   salaId?: string | null;
// //   tematicaId?: string | null;
// //   sala?: Sala;
// //   tematica?: Tematica;
// // }

// // export interface Valoracion {
// //   /** @format int32 */
// //   id?: number;
// //   /** @format int32 */
// //   estrellas?: number | null;
// //   comentario?: string | null;
// //   salaId?: string | null;
// //   sala?: Sala;
// // }

// // export interface Sala {
// //   id?: string | null;
// //   nombre?: string | null;
// //   promocionada?: boolean;
// //   duracion?: string | null;
// //   /** @format int32 */
// //   minimoJugadores?: number | null;
// //   /** @format int32 */
// //   maximoJugadores?: number | null;
// //   precioMinimo?: string | null;
// //   descripcion?: string | null;
// //   precioMaximo?: string | null;
// //   urlReserva?: string | null;
// //   edadPublico?: string | null;
// //   proximamente?: string | null;
// //   visto?: string | null;
// //   modoCombate?: string | null;
// //   textoCombate?: string | null;
// //   salaIgual?: string | null;
// //   enOferta?: string | null;
// //   textoOferta?: string | null;
// //   numeroResenyas?: string | null;
// //   regaloBonus?: string | null;
// //   disponibleIngles?: string | null;
// //   adaptadoMinusvalidos?: string | null;
// //   adaptadoCiegos?: string | null;
// //   adaptadoSordos?: string | null;
// //   adaptadoEmbarazadas?: string | null;
// //   noClaustrofobicos?: string | null;
// //   imagenAncha?: string | null;
// //   imagenEstrecha?: string | null;
// //   jugadoresIncluidos?: string | null;
// //   precioJugadorAdicional?: string | null;
// //   validez?: string | null;
// //   comoReservar?: string | null;
// //   terminosReserva?: string | null;
// //   otrosDatos?: string | null;
// //   companyiaId?: string | null;
// //   dificultadId?: string | null;
// //   companyia?: Companyia;
// //   dificultad?: Dificultad;
// //   partidas?: Partida[] | null;
// //   salasCategorias?: SalasCategorias[] | null;
// //   salasPublico?: SalasPublico[] | null;
// //   salasTematicas?: SalasTematicas[] | null;
// //   valoraciones?: Valoracion[] | null;
// // }

// // export interface SalasCategorias {
// //   salaId?: string | null;
// //   categoriaId?: string | null;
// //   categoria?: Categoria;
// //   sala?: Sala;
// // }

// // export interface Categoria {
// //   id?: string | null;
// //   tipo?: string | null;
// //   /** @format int32 */
// //   numeroSalas?: number;
// //   salasCategorias?: SalasCategorias[] | null;
// // }

// // export interface EquipoRequest {
// //   nombre?: string | null;
// //   usuarios?: Usuario[] | null;
// //   activado?: boolean;
// // }

// // export interface LoginRequest {
// //   usuario?: string | null;
// //   contrasenya?: string | null;
// //   token?: string | null;
// // }

// // export interface PerfilRequest {
// //   nombre?: string | null;
// //   telefono?: string | null;
// //   /** @format int32 */
// //   numeroPartidas?: number | null;
// //   /** @format int32 */
// //   partidasGanadas?: number | null;
// //   /** @format int32 */
// //   partidasPerdidas?: number | null;
// //   avatar?: string | null;
// //   /** @format date-time */
// //   nacido?: string | null;
// //   /** @format int32 */
// //   usuarioId?: number;
// // }

// // export interface UsuarioRequest {
// //   nick?: string | null;
// //   contrasenya?: string | null;
// //   email?: string | null;
// //   perfil?: PerfilRequest;
// // }

// // export interface Login {
// //   usuarioId?: string | null;
// //   tipoToken?: string | null;
// //   expiraEn?: string | null;
// //   tokenAcceso?: string | null;
// // }

// // export interface PartidaRequest {
// //   /** @format date-time */
// //   fecha?: string | null;
// //   minutos?: string | null;
// //   segundos?: string | null;
// //   /** @format byte */
// //   foto?: string | null;
// //   sala?: Sala;
// //   equipo?: Equipo;
// // }

// // export interface Amigo {
// //   /** @format int32 */
// //   id?: number;
// //   nick?: string | null;
// //   email?: string | null;
// //   activado?: boolean;
// //   perfil?: Perfil;
// //   equiposUsuarios?: EquiposUsuarios[] | null;
// //   noticias?: Noticia[] | null;
// //   usuariosAmigos?: UsuariosAmigos[] | null;
// //   estado?: Estado;
// // }

// export type QueryParamsType = Record<string | number, any>;
// export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

// export interface FullRequestParams extends Omit<RequestInit, "body"> {
//   /** set parameter to `true` for call `securityWorker` for this request */
//   secure?: boolean;
//   /** request path */
//   path: string;
//   /** content type of request body */
//   type?: ContentType;
//   /** query params */
//   query?: QueryParamsType;
//   /** format of response (i.e. response.json() -> format: "json") */
//   format?: ResponseFormat;
//   /** request body */
//   body?: unknown;
//   /** base url */
//   baseUrl?: string;
//   /** request cancellation token */
//   cancelToken?: CancelToken;
// }

// export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

// export interface ApiConfig<SecurityDataType = unknown> {
//   baseUrl?: string;
//   baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
//   securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
//   customFetch?: typeof fetch;
// }

// export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
//   data: D;
//   error: E;
// }

// type CancelToken = Symbol | string | number;

// export enum ContentType {
//   Json = "application/json",
//   FormData = "multipart/form-data",
//   UrlEncoded = "application/x-www-form-urlencoded",
//   Text = "text/plain",
// }

// export class HttpClient<SecurityDataType = unknown> {
//   public baseUrl: string = "";
//   private securityData: SecurityDataType | null = null;
//   private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
//   private abortControllers = new Map<CancelToken, AbortController>();
//   private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

//   private baseApiParams: RequestParams = {
//     credentials: "same-origin",
//     headers: {},
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
//     Object.assign(this, apiConfig);
//   }

//   public setSecurityData = (data: SecurityDataType | null) => {
//     this.securityData = data;
//   };

//   protected encodeQueryParam(key: string, value: any) {
//     const encodedKey = encodeURIComponent(key);
//     return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
//   }

//   protected addQueryParam(query: QueryParamsType, key: string) {
//     return this.encodeQueryParam(key, query[key]);
//   }

//   protected addArrayQueryParam(query: QueryParamsType, key: string) {
//     const value = query[key];
//     return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
//   }

//   protected toQueryString(rawQuery?: QueryParamsType): string {
//     const query = rawQuery || {};
//     const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
//     return keys
//       .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
//       .join("&");
//   }

//   protected addQueryParams(rawQuery?: QueryParamsType): string {
//     const queryString = this.toQueryString(rawQuery);
//     return queryString ? `?${queryString}` : "";
//   }

//   private contentFormatters: Record<ContentType, (input: any) => any> = {
//     [ContentType.Json]: (input: any) =>
//       input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
//     [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
//     [ContentType.FormData]: (input: any) =>
//       Object.keys(input || {}).reduce((formData, key) => {
//         const property = input[key];
//         formData.append(
//           key,
//           property instanceof Blob
//             ? property
//             : typeof property === "object" && property !== null
//             ? JSON.stringify(property)
//             : `${property}`,
//         );
//         return formData;
//       }, new FormData()),
//     [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
//   };

//   protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
//     return {
//       ...this.baseApiParams,
//       ...params1,
//       ...(params2 || {}),
//       headers: {
//         ...(this.baseApiParams.headers || {}),
//         ...(params1.headers || {}),
//         ...((params2 && params2.headers) || {}),
//       },
//     };
//   }

//   protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
//     if (this.abortControllers.has(cancelToken)) {
//       const abortController = this.abortControllers.get(cancelToken);
//       if (abortController) {
//         return abortController.signal;
//       }
//       return void 0;
//     }

//     const abortController = new AbortController();
//     this.abortControllers.set(cancelToken, abortController);
//     return abortController.signal;
//   };

//   public abortRequest = (cancelToken: CancelToken) => {
//     const abortController = this.abortControllers.get(cancelToken);

//     if (abortController) {
//       abortController.abort();
//       this.abortControllers.delete(cancelToken);
//     }
//   };

//   public request = async <T = any, E = any>({
//     body,
//     secure,
//     path,
//     type,
//     query,
//     format,
//     baseUrl,
//     cancelToken,
//     ...params
//   }: FullRequestParams): Promise<HttpResponse<T, E>> => {
//     const secureParams =
//       ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
//         this.securityWorker &&
//         (await this.securityWorker(this.securityData))) ||
//       {};
//     const requestParams = this.mergeRequestParams(params, secureParams);
//     const queryString = query && this.toQueryString(query);
//     const payloadFormatter = this.contentFormatters[type || ContentType.Json];
//     const responseFormat = format || requestParams.format;

//     return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
//       ...requestParams,
//       headers: {
//         ...(requestParams.headers || {}),
//         ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
//       },
//       signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
//       body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
//     }).then(async (response) => {
//       const r = response as HttpResponse<T, E>;
//       r.data = null as unknown as T;
//       r.error = null as unknown as E;

//       const data = !responseFormat
//         ? r
//         : await response[responseFormat]()
//             .then((data) => {
//               if (r.ok) {
//                 r.data = data;
//               } else {
//                 r.error = data;
//               }
//               return r;
//             })
//             .catch((e) => {
//               r.error = e;
//               return r;
//             });

//       if (cancelToken) {
//         this.abortControllers.delete(cancelToken);
//       }

//       if (!response.ok) throw data;
//       return data;
//     });
//   };
// }

// /**
//  * @title EscapeRank API
//  * @version v1
//  * @contact Héctor Granja (https://github.com/hectorgc86)
//  *
//  * Documentación de la API del proyecto fin de ciclo EscapeRank
//  */
// export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
//   api = {
//     /**
//      * No description
//      *
//      * @tags Categorias
//      * @name CategoriasList
//      * @summary Obtener todas las categorías
//      * @request GET:/api/Categorias
//      * @secure
//      */
//     categoriasList: (params: RequestParams = {}) =>
//       this.request<Categoria[], void>({
//         path: `/api/Categorias`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Categorias
//      * @name CategoriasCreate
//      * @summary Añadir una nueva categoría
//      * @request POST:/api/Categorias
//      * @secure
//      */
//     categoriasCreate: (data: Categoria, params: RequestParams = {}) =>
//       this.request<Categoria, void>({
//         path: `/api/Categorias`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Categorias
//      * @name CategoriasDetail
//      * @summary Obtener una categoría por su id
//      * @request GET:/api/Categorias/{id}
//      * @secure
//      */
//     categoriasDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Categoria, void>({
//         path: `/api/Categorias/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Categorias
//      * @name CategoriasUpdate
//      * @summary Modificar una categoría por su id
//      * @request PUT:/api/Categorias/{id}
//      * @secure
//      */
//     categoriasUpdate: (id: string | null, data: Categoria, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Categorias/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Categorias
//      * @name CategoriasDelete
//      * @summary Borrar una categoría
//      * @request DELETE:/api/Categorias/{id}
//      * @secure
//      */
//     categoriasDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Categoria, void>({
//         path: `/api/Categorias/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Ciudades
//      * @name CiudadesList
//      * @summary Obtener todas las ciudades
//      * @request GET:/api/Ciudades
//      * @secure
//      */
//     ciudadesList: (params: RequestParams = {}) =>
//       this.request<Ciudad[], void>({
//         path: `/api/Ciudades`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Ciudades
//      * @name CiudadesCreate
//      * @summary Añadir una nueva ciudad
//      * @request POST:/api/Ciudades
//      * @secure
//      */
//     ciudadesCreate: (data: Ciudad, params: RequestParams = {}) =>
//       this.request<Ciudad, void>({
//         path: `/api/Ciudades`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Ciudades
//      * @name CiudadesDetail
//      * @summary Obtener una ciudad por su id
//      * @request GET:/api/Ciudades/{id}
//      * @secure
//      */
//     ciudadesDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Ciudad, void>({
//         path: `/api/Ciudades/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Ciudades
//      * @name CiudadesUpdate
//      * @summary Modificar una ciudad por su id
//      * @request PUT:/api/Ciudades/{id}
//      * @secure
//      */
//     ciudadesUpdate: (id: string | null, data: Ciudad, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Ciudades/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Ciudades
//      * @name CiudadesDelete
//      * @summary Borrar una ciudad
//      * @request DELETE:/api/Ciudades/{id}
//      * @secure
//      */
//     ciudadesDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Ciudad, void>({
//         path: `/api/Ciudades/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Companyias
//      * @name CompanyiasList
//      * @summary Obtener todas las compañías
//      * @request GET:/api/Companyias
//      * @secure
//      */
//     companyiasList: (params: RequestParams = {}) =>
//       this.request<Companyia[], void>({
//         path: `/api/Companyias`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Companyias
//      * @name CompanyiasCreate
//      * @summary Añadir una nueva compañía
//      * @request POST:/api/Companyias
//      * @secure
//      */
//     companyiasCreate: (data: Companyia, params: RequestParams = {}) =>
//       this.request<Companyia, void>({
//         path: `/api/Companyias`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Companyias
//      * @name CompanyiasDetail
//      * @summary Obtener una compañía por su id
//      * @request GET:/api/Companyias/{id}
//      * @secure
//      */
//     companyiasDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Companyia, void>({
//         path: `/api/Companyias/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Companyias
//      * @name CompanyiasUpdate
//      * @summary Modificar una compañía por su id
//      * @request PUT:/api/Companyias/{id}
//      * @secure
//      */
//     companyiasUpdate: (id: string | null, data: Companyia, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Companyias/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Companyias
//      * @name CompanyiasDelete
//      * @summary Borrar una compañía
//      * @request DELETE:/api/Companyias/{id}
//      * @secure
//      */
//     companyiasDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Companyia, void>({
//         path: `/api/Companyias/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Dificultades
//      * @name DificultadesList
//      * @summary Obtener todas las dificultades
//      * @request GET:/api/Dificultades
//      * @secure
//      */
//     dificultadesList: (params: RequestParams = {}) =>
//       this.request<Dificultad[], void>({
//         path: `/api/Dificultades`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Dificultades
//      * @name DificultadesCreate
//      * @summary Añadir una nueva dificultad
//      * @request POST:/api/Dificultades
//      * @secure
//      */
//     dificultadesCreate: (data: Dificultad, params: RequestParams = {}) =>
//       this.request<Dificultad, void>({
//         path: `/api/Dificultades`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Dificultades
//      * @name DificultadesDetail
//      * @summary Obtener una dificultad por su id
//      * @request GET:/api/Dificultades/{id}
//      * @secure
//      */
//     dificultadesDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Dificultad, void>({
//         path: `/api/Dificultades/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Dificultades
//      * @name DificultadesUpdate
//      * @summary Modificar una dificultad por su id
//      * @request PUT:/api/Dificultades/{id}
//      * @secure
//      */
//     dificultadesUpdate: (id: string | null, data: Dificultad, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Dificultades/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Dificultades
//      * @name DificultadesDelete
//      * @summary Borrar una dificultad
//      * @request DELETE:/api/Dificultades/{id}
//      * @secure
//      */
//     dificultadesDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Dificultad, void>({
//         path: `/api/Dificultades/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposList
//      * @summary Obtener todos los equipos
//      * @request GET:/api/Equipos
//      * @secure
//      */
//     equiposList: (params: RequestParams = {}) =>
//       this.request<Equipo[], void>({
//         path: `/api/Equipos`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposCreate
//      * @summary Añadir un nuevo equipo
//      * @request POST:/api/Equipos
//      * @secure
//      */
//     equiposCreate: (data: EquipoRequest, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Equipos`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposUsuarioDetail
//      * @summary Obtener todos los equipos a los que un usuario pertenece
//      * @request GET:/api/Equipos/usuario/{id}
//      * @secure
//      */
//     equiposUsuarioDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Equipo[], void>({
//         path: `/api/Equipos/usuario/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposDetail
//      * @summary Obtener un equipo por su id
//      * @request GET:/api/Equipos/{id}
//      * @secure
//      */
//     equiposDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Equipo, void>({
//         path: `/api/Equipos/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposUpdate
//      * @summary Modificar un equipo por su id
//      * @request PUT:/api/Equipos/{id}
//      * @secure
//      */
//     equiposUpdate: (id: number, data: Equipo, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Equipos/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Equipos
//      * @name EquiposDelete
//      * @summary Borrar un equipo
//      * @request DELETE:/api/Equipos/{id}
//      * @secure
//      */
//     equiposDelete: (id: number, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Equipos/${id}`,
//         method: "DELETE",
//         secure: true,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Login
//      * @name LoginCreate
//      * @summary Iniciar sesión
//      * @request POST:/api/login
//      * @secure
//      */
//     loginCreate: (data: LoginRequest, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/login`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Login
//      * @name RegistroCreate
//      * @summary Registrar nuevo usuario
//      * @request POST:/api/registro
//      * @secure
//      */
//     registroCreate: (data: UsuarioRequest, params: RequestParams = {}) =>
//       this.request<Login, void>({
//         path: `/api/registro`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasList
//      * @summary Obtener todas las noticias
//      * @request GET:/api/Noticias
//      * @secure
//      */
//     noticiasList: (params: RequestParams = {}) =>
//       this.request<Noticia[], void>({
//         path: `/api/Noticias`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasCreate
//      * @summary Añadir una nueva noticia
//      * @request POST:/api/Noticias
//      * @secure
//      */
//     noticiasCreate: (data: Noticia, params: RequestParams = {}) =>
//       this.request<Noticia, void>({
//         path: `/api/Noticias`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasUsuarioDetail
//      * @summary Obtener todas las noticias de un usuario
//      * @request GET:/api/Noticias/usuario/{id}
//      * @secure
//      */
//     noticiasUsuarioDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Noticia[], void>({
//         path: `/api/Noticias/usuario/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasDetail
//      * @summary Obtener una noticia por su id
//      * @request GET:/api/Noticias/{id}
//      * @secure
//      */
//     noticiasDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Noticia, void>({
//         path: `/api/Noticias/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasUpdate
//      * @summary Modificar una noticia por su id
//      * @request PUT:/api/Noticias/{id}
//      * @secure
//      */
//     noticiasUpdate: (id: number, data: Noticia, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Noticias/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Noticias
//      * @name NoticiasDelete
//      * @summary Borrar una noticia
//      * @request DELETE:/api/Noticias/{id}
//      * @secure
//      */
//     noticiasDelete: (id: number, params: RequestParams = {}) =>
//       this.request<Noticia, void>({
//         path: `/api/Noticias/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasList
//      * @summary Obtener todas las partidas
//      * @request GET:/api/Partidas
//      * @secure
//      */
//     partidasList: (params: RequestParams = {}) =>
//       this.request<Partida[], void>({
//         path: `/api/Partidas`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasCreate
//      * @summary Añadir una nueva partida
//      * @request POST:/api/Partidas
//      * @secure
//      */
//     partidasCreate: (data: PartidaRequest, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Partidas`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasUsuarioDetail
//      * @summary Obtener todas las partidas de un usuario
//      * @request GET:/api/Partidas/usuario/{id}
//      * @secure
//      */
//     partidasUsuarioDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Partida[], void>({
//         path: `/api/Partidas/usuario/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasEquipoDetail
//      * @summary Obtener todas las partidas de un equipo
//      * @request GET:/api/Partidas/equipo/{id}
//      * @secure
//      */
//     partidasEquipoDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Partida[], void>({
//         path: `/api/Partidas/equipo/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasSalaDetail
//      * @summary Obtener todas las partidas jugadas en una sala
//      * @request GET:/api/Partidas/sala/{id}
//      * @secure
//      */
//     partidasSalaDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Partida[], void>({
//         path: `/api/Partidas/sala/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasDetail
//      * @summary Obtener una partida por su id
//      * @request GET:/api/Partidas/{id}
//      * @secure
//      */
//     partidasDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Partida, void>({
//         path: `/api/Partidas/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasUpdate
//      * @summary Modificar una partida por su id
//      * @request PUT:/api/Partidas/{id}
//      * @secure
//      */
//     partidasUpdate: (id: number, data: Partida, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Partidas/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Partidas
//      * @name PartidasDelete
//      * @summary Borrar una partida
//      * @request DELETE:/api/Partidas/{id}
//      * @secure
//      */
//     partidasDelete: (id: number, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Partidas/${id}`,
//         method: "DELETE",
//         secure: true,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesList
//      * @summary Obtener todos los perfiles
//      * @request GET:/api/Perfiles
//      * @secure
//      */
//     perfilesList: (params: RequestParams = {}) =>
//       this.request<Perfil[], void>({
//         path: `/api/Perfiles`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesCreate
//      * @summary Añadir un nuevo perfil
//      * @request POST:/api/Perfiles
//      * @secure
//      */
//     perfilesCreate: (data: Perfil, params: RequestParams = {}) =>
//       this.request<Perfil, void>({
//         path: `/api/Perfiles`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesUsuarioDetail
//      * @summary Obtener perfil de un usuario
//      * @request GET:/api/Perfiles/usuario/{id}
//      * @secure
//      */
//     perfilesUsuarioDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Perfil, void>({
//         path: `/api/Perfiles/usuario/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesDetail
//      * @summary Obtener un perfil por su id
//      * @request GET:/api/Perfiles/{id}
//      * @secure
//      */
//     perfilesDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Perfil, void>({
//         path: `/api/Perfiles/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesUpdate
//      * @summary Modificar un perfil por su id
//      * @request PUT:/api/Perfiles/{id}
//      * @secure
//      */
//     perfilesUpdate: (id: number, data: Perfil, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Perfiles/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Perfiles
//      * @name PerfilesDelete
//      * @summary Borrar un perfil
//      * @request DELETE:/api/Perfiles/{id}
//      * @secure
//      */
//     perfilesDelete: (id: number, params: RequestParams = {}) =>
//       this.request<Perfil, void>({
//         path: `/api/Perfiles/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Provincias
//      * @name ProvinciasList
//      * @summary Obtener todas las provincias
//      * @request GET:/api/Provincias
//      * @secure
//      */
//     provinciasList: (params: RequestParams = {}) =>
//       this.request<Provincia[], void>({
//         path: `/api/Provincias`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Provincias
//      * @name ProvinciasCreate
//      * @summary Añadir una nueva provincia
//      * @request POST:/api/Provincias
//      * @secure
//      */
//     provinciasCreate: (data: Provincia, params: RequestParams = {}) =>
//       this.request<Provincia, void>({
//         path: `/api/Provincias`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Provincias
//      * @name ProvinciasDetail
//      * @summary Obtener una provincia por su id
//      * @request GET:/api/Provincias/{id}
//      * @secure
//      */
//     provinciasDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Provincia, void>({
//         path: `/api/Provincias/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Provincias
//      * @name ProvinciasUpdate
//      * @summary Modificar una provincia por su id
//      * @request PUT:/api/Provincias/{id}
//      * @secure
//      */
//     provinciasUpdate: (id: string | null, data: Provincia, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Provincias/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Provincias
//      * @name ProvinciasDelete
//      * @summary Borrar una provincia
//      * @request DELETE:/api/Provincias/{id}
//      * @secure
//      */
//     provinciasDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Provincia, void>({
//         path: `/api/Provincias/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Publico
//      * @name PublicoList
//      * @summary Obtener todos los públicos
//      * @request GET:/api/Publico
//      * @secure
//      */
//     publicoList: (params: RequestParams = {}) =>
//       this.request<Publico[], void>({
//         path: `/api/Publico`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Publico
//      * @name PublicoCreate
//      * @summary Añadir un nuevo público
//      * @request POST:/api/Publico
//      * @secure
//      */
//     publicoCreate: (data: Publico, params: RequestParams = {}) =>
//       this.request<Publico, void>({
//         path: `/api/Publico`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Publico
//      * @name PublicoDetail
//      * @summary Obtener un público por su id
//      * @request GET:/api/Publico/{id}
//      * @secure
//      */
//     publicoDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Publico, void>({
//         path: `/api/Publico/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Publico
//      * @name PublicoUpdate
//      * @summary Modificar un público por su id
//      * @request PUT:/api/Publico/{id}
//      * @secure
//      */
//     publicoUpdate: (id: string | null, data: Publico, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Publico/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Publico
//      * @name PublicoDelete
//      * @summary Borrar un público
//      * @request DELETE:/api/Publico/{id}
//      * @secure
//      */
//     publicoDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Publico, void>({
//         path: `/api/Publico/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasList
//      * @summary Obtener todas las salas en base a paginado y búsqueda coincidente
//      * @request GET:/api/Salas
//      * @secure
//      */
//     salasList: (
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//         /** Cadena de búsqueda */
//         busqueda?: string | null;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasCreate
//      * @summary Añadir una sala
//      * @request POST:/api/Salas
//      * @secure
//      */
//     salasCreate: (data: Sala, params: RequestParams = {}) =>
//       this.request<Sala, void>({
//         path: `/api/Salas`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasPromocionadasList
//      * @summary Obtener todas las salas promocionadas en base a paginado
//      * @request GET:/api/Salas/promocionadas
//      * @secure
//      */
//     salasPromocionadasList: (
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas/promocionadas`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasCategoriaDetail
//      * @summary Obtener todas las salas de una categoría en base a su paginado y búsqueda coincidente
//      * @request GET:/api/Salas/categoria/{id}
//      * @secure
//      */
//     salasCategoriaDetail: (
//       id: string | null,
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//         /** Cadena de búsqueda */
//         busqueda?: string | null;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas/categoria/${id}`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasTematicaDetail
//      * @summary Obtener todas las salas de una temática en base a su paginado y búsqueda coincidente
//      * @request GET:/api/Salas/tematica/{id}
//      * @secure
//      */
//     salasTematicaDetail: (
//       id: string | null,
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//         /** Cadena de búsqueda */
//         busqueda?: string | null;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas/tematica/${id}`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasPublicoDetail
//      * @summary Obtener todas las salas de un público en base a su paginado y búsqueda coincidente
//      * @request GET:/api/Salas/publico/{id}
//      * @secure
//      */
//     salasPublicoDetail: (
//       id: string | null,
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//         /** Cadena de búsqueda */
//         busqueda?: string | null;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas/publico/${id}`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasDificultadDetail
//      * @summary Obtener todas las salas de una dificultad en base a su paginado y búsqueda coincidente
//      * @request GET:/api/Salas/dificultad/{id}
//      * @secure
//      */
//     salasDificultadDetail: (
//       id: string | null,
//       query?: {
//         /**
//          * Valor de paginado
//          * @format int32
//          */
//         offset?: number;
//         /** Cadena de búsqueda */
//         busqueda?: string | null;
//       },
//       params: RequestParams = {},
//     ) =>
//       this.request<Sala[], void>({
//         path: `/api/Salas/dificultad/${id}`,
//         method: "GET",
//         query: query,
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasDetail
//      * @summary Obtener una sala por su id
//      * @request GET:/api/Salas/{id}
//      * @secure
//      */
//     salasDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Sala, void>({
//         path: `/api/Salas/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasUpdate
//      * @summary Modificar una sala por su id
//      * @request PUT:/api/Salas/{id}
//      * @secure
//      */
//     salasUpdate: (id: string | null, data: Sala, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Salas/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Salas
//      * @name SalasDelete
//      * @summary Borrar una sala
//      * @request DELETE:/api/Salas/{id}
//      * @secure
//      */
//     salasDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Sala, void>({
//         path: `/api/Salas/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Tematicas
//      * @name TematicasList
//      * @summary Obtener todas las temáticas
//      * @request GET:/api/Tematicas
//      * @secure
//      */
//     tematicasList: (params: RequestParams = {}) =>
//       this.request<Tematica[], void>({
//         path: `/api/Tematicas`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Tematicas
//      * @name TematicasCreate
//      * @summary Añadir una nueva temática
//      * @request POST:/api/Tematicas
//      * @secure
//      */
//     tematicasCreate: (data: Tematica, params: RequestParams = {}) =>
//       this.request<Tematica, void>({
//         path: `/api/Tematicas`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Tematicas
//      * @name TematicasDetail
//      * @summary Obtener una temática por su id
//      * @request GET:/api/Tematicas/{id}
//      * @secure
//      */
//     tematicasDetail: (id: string | null, params: RequestParams = {}) =>
//       this.request<Tematica, void>({
//         path: `/api/Tematicas/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Tematicas
//      * @name TematicasUpdate
//      * @summary Modificar una temática por su id
//      * @request PUT:/api/Tematicas/{id}
//      * @secure
//      */
//     tematicasUpdate: (id: string | null, data: Tematica, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Tematicas/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Tematicas
//      * @name TematicasDelete
//      * @summary Borrar una temática
//      * @request DELETE:/api/Tematicas/{id}
//      * @secure
//      */
//     tematicasDelete: (id: string | null, params: RequestParams = {}) =>
//       this.request<Tematica, void>({
//         path: `/api/Tematicas/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosList
//      * @summary Obtener todos los usuarios
//      * @request GET:/api/Usuarios
//      * @secure
//      */
//     usuariosList: (params: RequestParams = {}) =>
//       this.request<Usuario[], void>({
//         path: `/api/Usuarios`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosCreate
//      * @summary Añadir un nuevo usuario
//      * @request POST:/api/Usuarios
//      * @secure
//      */
//     usuariosCreate: (data: Usuario, params: RequestParams = {}) =>
//       this.request<Usuario, void>({
//         path: `/api/Usuarios`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosEquipoDetail
//      * @summary Obtener todos los usuarios de un equipo
//      * @request GET:/api/Usuarios/equipo/{id}
//      * @secure
//      */
//     usuariosEquipoDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Usuario[], void>({
//         path: `/api/Usuarios/equipo/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosDetail
//      * @summary Obtener un usuario por su id
//      * @request GET:/api/Usuarios/{id}
//      * @secure
//      */
//     usuariosDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Usuario, void>({
//         path: `/api/Usuarios/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosUpdate
//      * @summary Modificar un usuario por su id
//      * @request PUT:/api/Usuarios/{id}
//      * @secure
//      */
//     usuariosUpdate: (id: number, data: Usuario, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Usuarios/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosDelete
//      * @summary Borrar un usuario
//      * @request DELETE:/api/Usuarios/{id}
//      * @secure
//      */
//     usuariosDelete: (id: number, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Usuarios/${id}`,
//         method: "DELETE",
//         secure: true,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosAmigosDetail
//      * @summary Obtener todos los amigos de un usuario
//      * @request GET:/api/Usuarios/{id}/amigos
//      * @secure
//      */
//     usuariosAmigosDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Amigo[], void>({
//         path: `/api/Usuarios/${id}/amigos`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosAmigosCreate
//      * @summary Mandar solicitud amistad
//      * @request POST:/api/Usuarios/{usuarioId}/amigos
//      * @secure
//      */
//     usuariosAmigosCreate: (usuarioId: number, data: string | null, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Usuarios/${usuarioId}/amigos`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosAmigosUpdate
//      * @summary Aceptar solicitud de amistad
//      * @request PUT:/api/Usuarios/{usuarioId}/amigos/{amigoId}
//      * @secure
//      */
//     usuariosAmigosUpdate: (usuarioId: number, amigoId: number, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Usuarios/${usuarioId}/amigos/${amigoId}`,
//         method: "PUT",
//         secure: true,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Usuarios
//      * @name UsuariosAmigosDelete
//      * @summary Borrar una amistad
//      * @request DELETE:/api/Usuarios/{usuarioId}/amigos/{amigoId}
//      * @secure
//      */
//     usuariosAmigosDelete: (usuarioId: number, amigoId: number, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Usuarios/${usuarioId}/amigos/${amigoId}`,
//         method: "DELETE",
//         secure: true,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Valoraciones
//      * @name ValoracionesList
//      * @summary Obtener todas las valoraciones
//      * @request GET:/api/Valoraciones
//      * @secure
//      */
//     valoracionesList: (params: RequestParams = {}) =>
//       this.request<Valoracion[], void>({
//         path: `/api/Valoraciones`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Valoraciones
//      * @name ValoracionesCreate
//      * @summary Añadir una nueva valoración
//      * @request POST:/api/Valoraciones
//      * @secure
//      */
//     valoracionesCreate: (data: Valoracion, params: RequestParams = {}) =>
//       this.request<Valoracion, void>({
//         path: `/api/Valoraciones`,
//         method: "POST",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Valoraciones
//      * @name ValoracionesDetail
//      * @summary Obtener una valoración por su id
//      * @request GET:/api/Valoraciones/{id}
//      * @secure
//      */
//     valoracionesDetail: (id: number, params: RequestParams = {}) =>
//       this.request<Valoracion, void>({
//         path: `/api/Valoraciones/${id}`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Valoraciones
//      * @name ValoracionesUpdate
//      * @summary Modificar una valoración por su id
//      * @request PUT:/api/Valoraciones/{id}
//      * @secure
//      */
//     valoracionesUpdate: (id: number, data: Valoracion, params: RequestParams = {}) =>
//       this.request<void, void>({
//         path: `/api/Valoraciones/${id}`,
//         method: "PUT",
//         body: data,
//         secure: true,
//         type: ContentType.Json,
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Valoraciones
//      * @name ValoracionesDelete
//      * @summary Borrar una valoración
//      * @request DELETE:/api/Valoraciones/{id}
//      * @secure
//      */
//     valoracionesDelete: (id: number, params: RequestParams = {}) =>
//       this.request<Valoracion, void>({
//         path: `/api/Valoraciones/${id}`,
//         method: "DELETE",
//         secure: true,
//         format: "json",
//         ...params,
//       }),

//     /**
//      * No description
//      *
//      * @tags Values
//      * @name ValuesList
//      * @summary Llamada por defecto en la carga de la API
//      * @request GET:/api/Values
//      * @secure
//      */
//     valuesList: (params: RequestParams = {}) =>
//       this.request<string[], any>({
//         path: `/api/Values`,
//         method: "GET",
//         secure: true,
//         format: "json",
//         ...params,
//       }),
//   };
// }
