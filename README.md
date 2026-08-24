# README.md: Comandos y Estructura

## Rediseño de Carta Digital - Del Barrio Valparaíso

### 🎯 Visión General
Rediseño completo de la página de carta digital del restaurante Del Barrio Valparaíso, transformando una estructura de texto plano en una experiencia visual moderna, interactiva e intuitiva.

---

## 📁 Estructura del Proyecto

```
delbarrio-redesign/
├── docs/
│   ├── README.md (este archivo)
│   ├── BRIEF.md (propuesta comercial)
│   ├── DECISIONES.md (acuerdos establecidos)
│   ├── REFERENCIAS.md (evidencia y patrones)
│   └── TAREAS.md (próximos pasos)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── MenuSection.tsx
│   │   ├── DishCard.tsx
│   │   ├── Footer.tsx
│   │   └── ContactInfo.tsx
│   ├── pages/
│   │   ├── carta.tsx
│   │   ├── desayunos.tsx
│   │   ├── cafeteria.tsx
│   │   └── tragos.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── components.css
│   ├── data/
│   │   ├── menu.json
│   │   ├── horarios.json
│   │   └── contacto.json
│   └── hooks/
│       ├── useMenuFilter.ts
│       └── useMobileMenu.ts
├── public/
│   ├── images/
│   │   ├── platos/
│   │   ├── hero/
│   │   └── social/
│   └── icons/
├── tests/
│   ├── components/
│   └── integration/
└── package.json
```

---

## 🔧 Comandos Principales

### Instalación y Setup
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar servidor de desarrollo
npm run dev
```

### Desarrollo
```bash
# Iniciar servidor local en puerto 3000
npm run dev

# Build de producción
npm run build

# Verificar tipos TypeScript
npm run type-check

# Linting
npm run lint

# Format con Prettier
npm run format
```

### Testing
```bash
# Ejecutar tests unitarios
npm run test

# Tests con cobertura
npm run test:coverage

# Tests E2E
npm run test:e2e
```

### Datos y Assets
```bash
# Optimizar imágenes
npm run optimize:images

# Generar sprites de iconos
npm run generate:icons

# Validar estructura de datos de menú
npm run validate:menu
```

---

## 📊 Inventario de Contenido

### Platos Mapeados
- **Entradas**: 8 platos
- **Fondos**: 11 platos
- **Ensaladas**: 4 platos
- **Sandwichs**: 16 opciones
- **Pizzas**: 13 variedades
- **Tablas**: 11 opciones para compartir
- **Postres**: 5 opciones
- **Total**: 70+ platos

### Rango de Precios
- Mínimo: $4.900 (copa de helado)
- Máximo: $35.500 (tabla La Matriz)
- Promedio: ~$12.900

### Contacto y Ubicación
- **Dirección**: Pedro Montt 2302, Valparaíso
- **Teléfono**: (32) 2221 3345
- **Horarios**: Lunes-Jueves 10:00-23:59 | Viernes-Sábado 10:00-01:59 | Domingo 10:00-23:59
- **Redes**: Facebook (DelBarrioValpo) | Instagram (@delbarriovalpo)

---

## 🎨 Stack Tecnológico

### Frontend
- **Framework**: Next.js 14+ (React 18+)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS Modules
- **Animaciones**: Framer Motion
- **Iconos**: React Icons / Custom SVG

### Data
- **Formato**: JSON (platos, horarios, contacto)
- **Validación**: Zod
- **Caché**: React Query / SWR

### Testing
- **Unit/Integration**: Vitest + React Testing Library
- **E2E**: Playwright
- **Visual Regression**: Percy (opcional)

### CI/CD
- **VCS**: Git
- **Hosting**: Vercel / Netlify
- **CDN**: Vercel Edge / Cloudflare

---

## 📋 Problemas a Resolver

| Problema | Prioridad | Estado |
|----------|-----------|--------|
| Navegación duplicada (4 instancias) | Alta | Sin resolver |
| Falta de imágenes de platos | Alta | Por implementar |
| URL incompleta en Tragos | Media | Por revisar |
| Sin galería del local | Media | Por crear |
| Experiencia móvil limitada | Alta | Por mejorar |

---

## 🚀 Fases de Desarrollo

### Fase 1: Análisis y Prototipo
- Wireframes de secciones clave
- Prototipo interactivo
- Validación con stakeholders

### Fase 2: Desarrollo Frontend
- Componentes reutilizables
- Sistema de diseño
- Responsivo (mobile-first)

### Fase 3: Integración y Optimización
- Optimización de imágenes
- Performance (Core Web Vitals)
- SEO
- Accesibilidad (WCAG 2.2)

### Fase 4: QA y Despliegue
- Testing completo
- Capacitación de equipo
- Despliegue en producción
- Monitoreo post-lanzamiento

---

## 📱 Breakpoints

```css
Mobile:    < 640px
Tablet:    640px - 1024px
Desktop:   1024px - 1440px
Widescreen: > 1440px
```

---

## 👥 Equipo y Roles

| Rol | Responsabilidad |
|-----|-----------------|
| **Product Manager** | Visión y priorización |
| **Design Lead** | Identidad visual y UX |
| **Frontend Developer** | Implementación frontend |
| **Backend Developer** | API y datos |
| **QA** | Testing y validación |

---

## 📞 Contacto y Soporte

- **Email**: info@delbarriovalpo.cl
- **Teléfono**: (32) 2221 3345
- **Dirección**: Pedro Montt 2302, Valparaíso

---

**Última actualización**: 2025-08-23
**Versión**: 1.0
