# TAREAS.md: Siguiente Resultado Verificable

## Rediseño Digital de Carta - Del Barrio Valparaíso

---

## 🎯 Estructura de Trabajo

Este documento define las **tareas inmediatas** y los **resultados verificables** para llevar el rediseño del concepto a la implementación.

**Metodología**: Agile con sprints de 2 semanas  
**Entrega**: Versión MVP (Minimum Viable Product) en 8 semanas  
**Métrica de éxito**: Sitio funcional, optimizado, lanzado en producción

---

## 📋 FASE 1: ANÁLISIS Y DISEÑO (Semanas 1-2)

### TAREA 1.1: Crear Wireframes de Secciones Clave
**Responsable**: Design Lead  
**Duración**: 5 días  
**Resultado Verificable**:
- [ ] Wireframe de Hero Section (mobile + desktop)
- [ ] Wireframe de Navegación (mobile hamburger + desktop)
- [ ] Wireframe de Dish Card (con imagen, nombre, descripción, precio)
- [ ] Wireframe de Página de Categoría (grid/lista de platos)
- [ ] Wireframe de Footer (contacto + redes)
- [ ] Wireframe de sección de horarios/ubicación

**Archivos de Entrega**:
- `design/wireframes/01-hero.pdf`
- `design/wireframes/02-navigation.pdf`
- `design/wireframes/03-dish-card.pdf`
- `design/wireframes/04-category-page.pdf`
- `design/wireframes/05-footer.pdf`

**Criterios de Aceptación**:
- ✅ Wireframes en grayscale (sin color)
- ✅ Anotaciones claras de interactividad
- ✅ Desktop y mobile incluidos
- ✅ Aprobados por Product Manager

---

### TAREA 1.2: Definir Sistema de Diseño (Design Tokens)
**Responsable**: Design Lead + Frontend Dev  
**Duración**: 4 días  
**Resultado Verificable**:
- [ ] Paleta de colores documentada (6 colores + variantes)
- [ ] Tipografía definida (3 fuentes: display, body, mono)
- [ ] Espaciado definido (8 niveles: xs a 3xl)
- [ ] Border radius estandarizado (5 niveles)
- [ ] Sombras documentadas (4 niveles)
- [ ] Archivo CSS/SCSS con tokens

**Archivos de Entrega**:
- `src/styles/tokens.css`
- `design/design-system.md`
- `design/color-palette.pdf`

**Criterios de Aceptación**:
- ✅ Tokens en CSS custom properties
- ✅ Documentación en Markdown
- ✅ Colores accesibles (WCAG AA mínimo)
- ✅ Coherente con identidad "Del Barrio"

---

### TAREA 1.3: Recopilación de Fotografías de Platos
**Responsable**: Project Manager / Fotógrafo  
**Duración**: 7 días  
**Resultado Verificable**:
- [ ] Fotos de 50+ platos principales
- [ ] Resolución mínima: 1200x800px
- [ ] Formato: WebP + JPEG fallback
- [ ] Nombradas según ID de plato (ej: `ceviche-lucho-barrios.webp`)
- [ ] Organizadas por categoría en carpeta `public/images/platos/`

**Archivos de Entrega**:
- `public/images/platos/entradas/*.webp`
- `public/images/platos/fondos/*.webp`
- `public/images/platos/ensaladas/*.webp`
- `public/images/platos/sandwichs/*.webp`
- `public/images/platos/pizzas/*.webp`
- `public/images/platos/tablas/*.webp`
- `public/images/platos/postres/*.webp`

**Criterios de Aceptación**:
- ✅ Fotos de calidad (sin fotos de stock)
- ✅ Iluminación consistente
- ✅ Composición que invite al consumo
- ✅ Optimizadas para web (< 150KB por imagen)

---

### TAREA 1.4: Estructurar Datos de Menú (JSON)
**Responsable**: Backend Dev  
**Duración**: 3 días  
**Resultado Verificable**:
- [ ] Archivo `src/data/menu.json` con estructura completa
- [ ] 70+ platos con campos: id, nombre, descripción, precio, imagen, tags
- [ ] Validación con esquema Zod
- [ ] Archivo `src/data/horarios.json`
- [ ] Archivo `src/data/contacto.json`

**Archivos de Entrega**:
```
src/data/
  ├── menu.json
  ├── horarios.json
  ├── contacto.json
  └── schema.ts (validación Zod)
```

**Criterios de Aceptación**:
- ✅ JSON válido (sin errores de sintaxis)
- ✅ Todos los 70 platos incluidos
- ✅ Datos completamente validados
- ✅ Fácil de actualizar manualmente

**Estructura de Ejemplo**:
```json
{
  "categorías": [
    {
      "id": "entradas",
      "nombre": "Entradas",
      "descripción": "Comienza tu experiencia con nuestras entradas",
      "platos": [
        {
          "id": "ceviche-lucho-barrios",
          "nombre": "Ceviche Lucho Barrios",
          "descripción": "Ceviche de pez blanco de nuestro litoral aderezado a lo peruano.",
          "precio": 11900,
          "imagen": "/images/platos/entradas/ceviche-lucho-barrios.webp",
          "tags": ["mar", "peruana", "popular"],
          "preparación_min": 10,
          "ingredientes": ["pez blanco", "limón", "ají"]
        }
      ]
    }
  ]
}
```

---

### TAREA 1.5: Prototipo Interactivo en Figma
**Responsable**: Design Lead  
**Duración**: 5 días  
**Resultado Verificable**:
- [ ] Prototipo funcional en Figma
- [ ] Flujo completo: Hero → Categoría → Plato → Contacto
- [ ] Interactividad básica (clicks, navegación)
- [ ] Componentes reutilizables
- [ ] Link compartible para feedback

**Archivos de Entrega**:
- Figma link: `https://figma.com/[proyecto]`
- Documento de comentarios: `design/feedback-log.md`

**Criterios de Aceptación**:
- ✅ Prototipo es clickeable de principio a fin
- ✅ Refleja wireframes y design system
- ✅ Aprobado por Product Manager
- ✅ Feedback incorporado

---

## 🔨 FASE 2: DESARROLLO FRONTEND (Semanas 3-5)

### TAREA 2.1: Setup de Proyecto Next.js + Tailwind
**Responsable**: Frontend Dev (Lead)  
**Duración**: 2 días  
**Resultado Verificable**:
- [ ] Repositorio creado en GitHub
- [ ] Next.js 14 instalado
- [ ] Tailwind CSS configurado
- [ ] TypeScript habilitado
- [ ] ESLint + Prettier configurados
- [ ] Estructura de carpetas lista

**Archivos de Entrega**:
- `package.json` con dependencias correctas
- `.eslintrc.json`
- `tailwind.config.ts`
- `tsconfig.json`

**Criterios de Aceptación**:
- ✅ `npm run dev` ejecuta sin errores
- ✅ `npm run build` completa sin warnings
- ✅ `npm run lint` pasa todas las reglas

**Dependencias Mínimas**:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

### TAREA 2.2: Componentes Reutilizables
**Responsable**: Frontend Dev (Senior)  
**Duración**: 5 días  
**Resultado Verificable**:
- [ ] Componente `<Header />`
- [ ] Componente `<Navigation />`
- [ ] Componente `<DishCard />`
- [ ] Componente `<CategorySection />`
- [ ] Componente `<FilterBar />`
- [ ] Componente `<ContactInfo />`
- [ ] Componente `<Footer />`
- [ ] Storybook o historia visual de componentes

**Archivos de Entrega**:
```
src/components/
  ├── Header.tsx
  ├── Navigation.tsx
  ├── DishCard.tsx
  ├── CategorySection.tsx
  ├── FilterBar.tsx
  ├── ContactInfo.tsx
  ├── Footer.tsx
  └── [otros]
```

**Criterios de Aceptación**:
- ✅ Todos los componentes son TypeScript
- ✅ Props bien tipadas
- ✅ Estilos con Tailwind
- ✅ Responsive (mobile first)
- ✅ Accesibles (WCAG AA)
- ✅ Sin console.log
- ✅ Tests básicos incluidos

---

### TAREA 2.3: Páginas Principales
**Responsable**: Frontend Dev  
**Duración**: 5 días  
**Resultado Verificable**:
- [ ] Página `/` (Home/Hero)
- [ ] Página `/carta` (Index de categorías)
- [ ] Página `/carta/[categoria]` (Dinámica)
- [ ] Página `/desayunos`
- [ ] Página `/cafeteria`
- [ ] Página `/tragos`

**Archivos de Entrega**:
```
src/pages/
  ├── index.tsx (home)
  ├── carta/
  │   ├── index.tsx
  │   └── [slug].tsx
  ├── desayunos.tsx
  ├── cafeteria.tsx
  └── tragos.tsx
```

**Criterios de Aceptación**:
- ✅ Todas las páginas cargan sin errores
- ✅ Navegación entre páginas funciona
- ✅ Data se renderiza correctamente
- ✅ Responsive en mobile y desktop
- ✅ TypeScript no reporta errores

---

### TAREA 2.4: Filtros y Búsqueda
**Responsable**: Frontend Dev  
**Duración**: 4 días  
**Resultado Verificable**:
- [ ] Filtro por categoría (funcional)
- [ ] Filtro por rango de precio (slider)
- [ ] Filtro por dieta (checkboxes: vegetariano, sin gluten)
- [ ] Búsqueda por nombre (input)
- [ ] Estado de filtros persiste en URL

**Archivos de Entrega**:
- `src/components/FilterBar.tsx`
- `src/hooks/useMenuFilter.ts`
- Tests en `tests/hooks/useMenuFilter.test.ts`

**Criterios de Aceptación**:
- ✅ Todos los filtros funcionan
- ✅ Resultados actualizan en tiempo real
- ✅ URL cambios con filtros (shareable)
- ✅ Limpieza de filtros funciona

---

### TAREA 2.5: Navegación Móvil (Hamburger Menu)
**Responsable**: Frontend Dev  
**Duración**: 2 días  
**Resultado Verificable**:
- [ ] Hamburger menu responsive
- [ ] Menú se abre/cierra suavemente
- [ ] Cierra al hacer click en un link
- [ ] Cierra al hacer click fuera
- [ ] Accesible (ARIA labels)

**Archivos de Entrega**:
- `src/components/Navigation.tsx` (mejorado)
- `src/hooks/useMobileMenu.ts`

**Criterios de Aceptación**:
- ✅ Funciona en pantallas < 768px
- ✅ Animación suave (no jumpy)
- ✅ ARIA labels correctos
- ✅ Teclado navegable

---

## 🎨 FASE 3: OPTIMIZACIÓN Y PULIDO (Semana 6)

### TAREA 3.1: Optimización de Imágenes
**Responsable**: Frontend Dev  
**Duración**: 2 días  
**Resultado Verificable**:
- [ ] Todas las imágenes en WebP
- [ ] JPEG fallback incluido
- [ ] Lazy loading implementado
- [ ] Responsive images (srcset)
- [ ] Comprimidas (< 150KB cada una)

**Verificación**:
```bash
npm run test:images
```

**Criterios de Aceptación**:
- ✅ Lighthouse score > 90 en performance
- ✅ LCP < 2.5s
- ✅ No hay layout shifts

---

### TAREA 3.2: Accesibilidad (WCAG 2.2 AA)
**Responsable**: QA / Accessibility Specialist  
**Duración**: 3 días  
**Resultado Verificable**:
- [ ] Contraste de colores > 4.5:1
- [ ] Alt text en todas las imágenes
- [ ] ARIA labels donde sea necesario
- [ ] Navegación por teclado completa
- [ ] Test automático con axe DevTools

**Verificación**:
```bash
npm run test:a11y
```

**Criterios de Aceptación**:
- ✅ axe DevTools: 0 violations críticas
- ✅ WAVE: 0 errores
- ✅ Navegable sin ratón

---

### TAREA 3.3: SEO Local
**Responsable**: Frontend Dev + SEO  
**Duración**: 2 días  
**Resultado Verificable**:
- [ ] Meta tags completos (og:*, twitter:*)
- [ ] Schema.org (LocalBusiness, Restaurant)
- [ ] Sitemap.xml generado
- [ ] robots.txt configurado
- [ ] Google Search Console configurado

**Archivos de Entrega**:
- `public/sitemap.xml`
- `public/robots.txt`
- `pages/_document.tsx` (meta tags)

**Criterios de Aceptación**:
- ✅ Aparece en Google Maps búsqueda
- ✅ Rich snippets en resultados
- ✅ Schema validado en schema.org

---

### TAREA 3.4: Performance & Core Web Vitals
**Responsable**: Frontend Dev (Performance)  
**Duración**: 3 días  
**Resultado Verificable**:
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] FCP < 1.5s
- [ ] Lighthouse score > 90

**Verificación**:
```bash
npm run test:lighthouse
```

**Criterios de Aceptación**:
- ✅ Google PageSpeed: Green en all metrics
- ✅ Lighthouse: Green performance

---

### TAREA 3.5: Testing (Unit + Integration)
**Responsable**: QA / Frontend Dev  
**Duración**: 3 días  
**Resultado Verificable**:
- [ ] 80%+ cobertura de componentes
- [ ] Tests de navegación
- [ ] Tests de filtros
- [ ] Tests de imágenes y carga
- [ ] Tests de formularios (reserva)

**Archivos de Entrega**:
```
tests/
  ├── components/Header.test.tsx
  ├── components/DishCard.test.tsx
  ├── components/FilterBar.test.tsx
  ├── integration/navigation.test.ts
  └── e2e/carta.spec.ts
```

**Verificación**:
```bash
npm run test
npm run test:coverage
```

**Criterios de Aceptación**:
- ✅ Cobertura >= 80%
- ✅ Todos los tests en verde
- ✅ Sin warnings

---

## 🚀 FASE 4: DESPLIEGUE Y LANZAMIENTO (Semana 7-8)

### TAREA 4.1: Configurar Hosting (Vercel/Netlify)
**Responsable**: DevOps / Frontend Lead  
**Duración**: 1 día  
**Resultado Verificable**:
- [ ] Proyecto conectado a Git
- [ ] Build automático configurado
- [ ] Variables de entorno definidas
- [ ] Dominio configurado (delbarriovalpo.cl)
- [ ] SSL certificado

**Criterios de Aceptación**:
- ✅ Sitio accesible en dominio
- ✅ HTTPS funciona
- ✅ Build automático en cada push

---

### TASKA 4.2: Integración con Google Analytics
**Responsable**: Marketing / Frontend Dev  
**Duración**: 1 día  
**Resultado Verificable**:
- [ ] Google Analytics 4 implementado
- [ ] Eventos de conversión configurados:
  - Click en "Reservar"
  - Click en "Llamar"
  - Click en "Ver Maps"
  - Click en redes sociales

**Verificación**:
- ✅ Datos llegando a GA4 en tiempo real

---

### TAREA 4.3: Capacitación del Equipo
**Responsable**: Project Manager  
**Duración**: 1 día  
**Resultado Verificable**:
- [ ] Documentación de cómo actualizar menú
- [ ] Proceso de cambios en JSON
- [ ] Proceso de nuevas fotos
- [ ] Video tutorial (10 min)

**Archivos de Entrega**:
- `docs/MANTENIMIENTO.md`
- `docs/video-tutorial.mp4`

---

### TAREA 4.4: Lanzamiento en Producción
**Responsable**: Project Manager + DevOps  
**Duración**: 1 día  
**Resultado Verificable**:
- [ ] Versión en producción estable
- [ ] Monitoreo activado
- [ ] Alertas configuradas
- [ ] Rollback plan documentado
- [ ] Comunicado de lanzamiento enviado

**Checklist Pre-Lanzamiento**:
- ✅ Sitio funciona en todas las categorías
- ✅ Links a redes funcionan
- ✅ Teléfono es clickeable
- ✅ Google Maps abre correctamente
- ✅ Horarios se muestran correctamente
- ✅ Reservas redirigen correctamente
- ✅ Lighthouse score > 90
- ✅ Accesibilidad validada
- ✅ Funciona en iPhone 6+, Samsung A10, Chrome, Firefox, Safari

---

### TAREA 4.5: Post-Lanzamiento (Primeros 7 días)
**Responsable**: Equipo completo  
**Duración**: 7 días  
**Resultado Verificable**:
- [ ] Monitoreo activo de errores
- [ ] Feedback de usuarios recopilado
- [ ] Bugs críticos arreglados en < 4 horas
- [ ] Métricas de GA4 analizadas
- [ ] Informe inicial de resultados

**Métricas a Monitorear**:
- Visitas diarias
- Bounce rate
- Tiempo en sitio
- Tasa de conversión (reserva/llamada)
- Origen del tráfico
- Dispositivo más usado

---

## 📊 MÉTRICAS DE ÉXITO POR TAREA

| Tarea | Métrica | Target |
|-------|---------|--------|
| 1.1 Wireframes | Aprobación stakeholders | 100% |
| 1.2 Design System | Componentes reutilizables | 90%+ |
| 1.3 Fotos | Platos fotografiados | 100% (70+) |
| 1.4 JSON | Validación de datos | 100% |
| 1.5 Prototipo | Aprobación UX | 100% |
| 2.1 Setup | Build sin errores | 100% |
| 2.2 Componentes | Test coverage | 80%+ |
| 2.3 Páginas | Funcionalidad | 100% |
| 2.4 Filtros | Precisión de búsqueda | 95%+ |
| 2.5 Mobile | Usabilidad móvil | 95%+ |
| 3.1 Imágenes | Performance | LCP < 2.5s |
| 3.2 Accesibilidad | WCAG | AA mínimo |
| 3.3 SEO | Indexación | 90%+ |
| 3.4 Core Web Vitals | Performance | Green en todos |
| 3.5 Testing | Coverage | 80%+ |
| 4.1 Hosting | Disponibilidad | 99.9%+ |
| 4.2 Analytics | Tracking | 100% eventos |
| 4.3 Capacitación | Entendimiento | 100% |
| 4.4 Lanzamiento | Go-live | 100% exitoso |
| 4.5 Post-launch | Estabilidad | 0 bugs críticos |

---

## 🔄 CICLO DE REVISIÓN

### Revisiones Semanales
**Día**: Viernes 15:00  
**Duración**: 30 minutos  
**Asistentes**: Product Manager, Design Lead, Frontend Lead, Project Manager  
**Temas**:
- Estado de tareas
- Blockers
- Riesgos
- Ajustes de plan

### Revisión de Fase
**Al final de cada fase**: Review completa del trabajo
- Demo de funcionalidad
- Análisis de métricas
- Feedback y ajustes
- Aprobación para siguiente fase

---

## ⚠️ RIESGOS IDENTIFICADOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|--------|-----------|
| Retrasos en fotos | Alta | Alto | Iniciar inmediatamente |
| Design changes tardías | Media | Alto | Fijar diseño en W2 |
| Performance issues | Baja | Alto | Testing temprano |
| Incompatibilidad móvil | Baja | Alto | Testing en dispositivos reales |

---

## 📅 TIMELINE COMPLETO

```
Semana 1-2: ANÁLISIS Y DISEÑO
  W1: Wireframes, Design System, Fotos, JSON
  W2: Prototipo, Feedback, Ajustes

Semana 3-5: DESARROLLO FRONTEND
  W3: Setup, Componentes, Páginas básicas
  W4: Filtros, Navegación móvil
  W5: Integración completa, Testing inicial

Semana 6: OPTIMIZACIÓN Y PULIDO
  Testing exhaustivo
  Performance optimization
  Accesibilidad
  SEO

Semana 7-8: DESPLIEGUE
  W7: Hosting, Analytics, Capacitación
  W8: Lanzamiento, Monitoreo, Ajustes

TOTAL: 8 semanas
```

---

## ✅ DEFINICIÓN DE DONE

Una tarea está "DONE" cuando:
1. ✅ Código escrito y commiteado
2. ✅ Tests pasando (coverage >= 80%)
3. ✅ Code review aprobado
4. ✅ Sin console.log o debug statements
5. ✅ Documentado (comentarios claros)
6. ✅ No hay warnings en build
7. ✅ Verificado en mobile y desktop
8. ✅ Accesibilidad validada
9. ✅ Aprobado por Product Manager

---

## 📞 ESCALACIÓN

**Bloqueador**: Contactar inmediatamente  
**Reportar a**: Project Manager → Product Manager  
**SLA**: < 2 horas de respuesta

---

**Documento creado**: 2025-08-23  
**Última actualización**: 2025-08-23  
**Versión**: 1.0  
**Estado**: Listo para ejecución
