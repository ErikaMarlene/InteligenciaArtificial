"use client";
import React, { useState } from 'react';
import { DarkThemeToggle, Flowbite, Label, Select, Card, Pagination, TextInput } from "flowbite-react";

const questions = [
  { id: 'name', label: 'Nombre', type: 'text' },
  { id: 'age', label: 'Edad', type: 'number' },
  { id: 'email', label: 'Correo Electrónico', type: 'email' },
  { id: 'address', label: 'Dirección', type: 'text' },
  { id: 'phone', label: 'Teléfono', type: 'tel' },

  { id: 'job', label: 'Job', type: 'text' },
  { id: 'age', label: 'Edad', type: 'number' },
  { id: 'email', label: 'Correo Electrónico', type: 'email' },
  { id: 'address', label: 'Dirección', type: 'text' },
  { id: 'phone', label: 'Teléfono', type: 'tel' },
  // Agrega más preguntas aquí
];

const QuestionsPerPage = 10;

function PaginatedForm() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * QuestionsPerPage;
  const endIndex = startIndex + QuestionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
        className="flex-1 pt-28 pb-1 padding-x"
        style={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
      <form>
        {currentQuestions.map((question) => (
          <div key={question.id}>
            <Label htmlFor={question.id} value={question.label} />
            <TextInput
              id={question.id}
              type={question.type}
              className="mt-1"
            />
          </div>
        ))}
      </form>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          showIcons
          totalPages={Math.ceil(questions.length / QuestionsPerPage)}
        />
      </div>
    </div>
  );
}

export default PaginatedForm;
