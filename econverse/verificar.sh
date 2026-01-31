#!/bin/bash
# Script para verificar estrutura do projeto React

echo "============================================"
echo "📊 Verificação da Estrutura do Projeto"
echo "============================================"
echo ""

echo "✅ Componentes React:"
ls -la src/components/ 2>/dev/null | grep ".tsx" | awk '{print "   - " $9}'
echo ""

echo "✅ Arquivo de tipos:"
test -f src/types.ts && echo "   - types.ts ✓" || echo "   - types.ts ✗"
echo ""

echo "✅ Estilos:"
test -f src/App.css && echo "   - App.css ✓" || echo "   - App.css ✗"
test -f src/index.css && echo "   - index.css ✓" || echo "   - index.css ✗"
echo ""

echo "✅ Dados:"
test -f public/produtos.json && echo "   - produtos.json ✓" || echo "   - produtos.json ✗"
test -d public/img && echo "   - img/ ✓" || echo "   - img/ ✗"
echo ""

echo "✅ Configuração:"
test -f package.json && echo "   - package.json ✓" || echo "   - package.json ✗"
test -f tsconfig.json && echo "   - tsconfig.json ✓" || echo "   - tsconfig.json ✗"
echo ""

echo "============================================"
echo "🚀 Para iniciar: npm start"
echo "📦 Para build: npm run build"
echo "============================================"
